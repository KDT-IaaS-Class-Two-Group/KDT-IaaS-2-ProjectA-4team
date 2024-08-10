import { Controller, Post } from "@nestjs/common";
import { UserLogService } from "./userlog.service";

@Controller('log')
export class LogsController{
  constructor(private readonly userLogService:UserLogService){}

  //로그인 로그
  @Post('login'){

  }
  //로그아웃 로그
  @Post('logout'){

  }
  //사용자 구매 로그
  @Post('purchase'){

  }
  //재고 추가 로그
  @Post('addStock'){

  }
  //재고 폐기 로그
  @Post('delStock'){
    
  }
  //메뉴 추가 로그
  @Post('addMenu')
}

