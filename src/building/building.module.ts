import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {BuildingService} from './building.service';
import {BuildingController} from './building.controller';
import {Building} from './building.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Building])],
  providers: [BuildingService],
  controllers: [BuildingController],
})
export class BuildingModule {
}
