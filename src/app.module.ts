import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesModule } from './roles/roles.module';
import { Rol } from './roles/rol.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'postgres',
    port:5432,
    host:'localhost',
    username:'postgres',
    password:'123456',
    database:'evento',
    //entities:[Persona],
  
    //entities: [__dirname + '/../**/*.entity.{js,ts}'],
    entities: [Rol]
    //entities:[__dirname + '/**/*.entity{.ts,.js}'],
    //autoLoadEntities:true,
    //synchronize: true,
    
  }),RolesModule],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
