import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class TestAPIResolver {
  @Query(() => String)
  testAPI() {
    return '테스트 완료! 접속되었습니다 - slipper';
  }
}
