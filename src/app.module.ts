import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonasModule } from './personas/personas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { RolesModule } from './roles/roles.module';
@Module({
  imports: [TypeOrmModule.forRoot({
    type:'postgres',
    port:5432,
    host:'localhost',
    username:'postgres',
    password:'123456',
    database:'EventoAcademico',
    //entities:[Persona],
  
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    //entities:[__dirname + '/**/*.entity{.ts,.js}'],
    autoLoadEntities:true,
    //synchronize: true,
    
  }),
    PersonasModule, UsuariosModule,
    RolesModule],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
