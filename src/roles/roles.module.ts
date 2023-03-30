import { Module } from '@nestjs/common';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import {TypeOrmModule} from '@nestjs/typeorm'
import { Rol } from './rol.entity';


@Module({
  //aqui no se hizo cambios que hay
  imports:[TypeOrmModule.forFeature([Rol])],
  controllers: [RolesController],
  providers: [RolesService],
  exports:[RolesService]
})
export class RolesModule {}
