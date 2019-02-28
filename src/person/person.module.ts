import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attendance } from '../attendance/attendance.entity';
import { Building } from '../building/building.entity';
import { PersonController } from './person.controller';
import { Person } from './person.entity';
import { PersonService } from './person.service';

@Module( {
	imports: [ TypeOrmModule.forFeature( [ Person, Building, Attendance ] ) ],
	providers: [ PersonService ],
	controllers: [ PersonController ],
} )
export class PersonModule {
}
