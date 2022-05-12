import { Catch, ExceptionFilter, HttpException } from '@nestjs/common';

// extends =  상속 (다중상속은 일반적으로 지원하지 않는다)  / implements = 구현
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  //ExceptionFilter 을 직접 구현(implements)해야 함

  //모든 예외가 이곳으로 모임
  catch(exception: HttpException) {
    const status = exception.getStatus();
    const message = exception.message;

    console.log('=============');
    console.log('에러가 발생했어요!');
    console.log('에러내용:', message);
    console.log('에러코드:', status);
    console.log('=============');
  }
}
