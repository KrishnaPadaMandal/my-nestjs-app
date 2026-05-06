import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConfig } from './config/database.config';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 🔥 VERY IMPORTANT
    }),
    DatabaseConfig,
    UserModule,
  ],
})
export class AppModule {}