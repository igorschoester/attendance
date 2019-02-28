import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BuildingController } from './building.controller';
import { Building } from './building.entity';
import { BuildingService } from './building.service';

@Module( {
	imports: [ TypeOrmModule.forFeature( [ Building ] ) ],
	providers: [ BuildingService ],
	controllers: [ BuildingController ],
} )
export class BuildingModule {
}
