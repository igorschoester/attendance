import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Attendance } from '../attendance/attendance.entity';
import { Building } from '../building/building.entity';
import { Person } from './person.entity';

@Injectable()
export class PersonService {
	constructor(
		@InjectRepository( Person )
		private readonly personRepository: Repository<Person>,
		@InjectRepository( Building )
		private readonly buildingRepository: Repository<Building>,
		@InjectRepository( Attendance )
		private readonly attendanceRepository: Repository<Attendance>,
	) {
	}

	async create( createPersonDto ): Promise<Person[]> {
		return await this.personRepository.save( createPersonDto );
	}

	async findAll(): Promise<Person[]> {
		return await this.personRepository.find();
	}

	async findOne( id ): Promise<Person> {
		return await this.personRepository.findOneOrFail( { where: { id } } );
	}

	async remove( id ): Promise<DeleteResult> {
		return await this.personRepository.delete( { id } );
	}

	async checkIn( id, checkInDto ): Promise<Attendance> {
		const person = await this.personRepository.findOneOrFail( id );
		const building = await this.buildingRepository.findOneOrFail( checkInDto.buildingId );

		// Delete any attendances that are not in the requested building.
		await this.attendanceRepository.delete( { where: { personId: id, building: ! building.id } } );

		return await this.attendanceRepository.save( { person, building } );
	}

	async checkOut( id ): Promise<DeleteResult> {
		return await this.attendanceRepository.delete( { where: { personId: id } } );
	}
}
