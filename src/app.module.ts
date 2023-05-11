/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Server } from 'socket.io';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Chat } from './chat/chat.entity';
import { SocketIoGateway } from './socket-io.gateway';
import { AppGateway } from './app.gateway';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'AppUnik@1',
      database: 'chat',
      entities: [Chat],
      synchronize: true,
    }),

    TypeOrmModule.forFeature([Chat]),],
  controllers: [AppController],
  providers: [AppService, Server, SocketIoGateway, AppGateway],
})
export class AppModule { }
