#include <nan.h>

// at the top of your file
#ifndef _WIN32
#include <unistd.h>
#endif

using namespace v8;

NAN_METHOD(Print) {
    Local<String> str = args[0].As<String>();
    printf("%s\n", *String::Utf8Value(str));
    NanReturnUndefined();
}
NAN_METHOD(Length) {
    NanScope();
    Local<String> str = args[0].As<String>();
    int len = strlen(*String::Utf8Value(str));
    Local<Number> result = NanNew<Number>(len);
    NanReturnValue(result);
}
NAN_METHOD(Delay) {
    int ms = args[0].As<Number>()->IntegerValue() * 1000;
    Local<Function> callback = args[1].As<Function>();

    // (in function)
    #ifdef _WIN32
    Sleep(ms);
    #else
    usleep(ms);
    #endif

    NanMakeCallback(NanGetCurrentContext()->Global(), callback, 0, NULL);
    NanReturnUndefined();
}

void Init(Handle<Object> exports) {
  exports->Set(NanNew("print"), NanNew<FunctionTemplate>(Print)->GetFunction());
  exports->Set(NanNew("length"), NanNew<FunctionTemplate>(Length)->GetFunction());
  exports->Set(NanNew("delay"), NanNew<FunctionTemplate>(Delay)->GetFunction());
}

NODE_MODULE(myaddon, Init)
