import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

import { Building } from './building.entity';

@Injectable()
export class BuildingService {
	constructor(
		@InjectRepository( Building )
		private readonly buildingRepository: Repository<Building>,
	) {
	}

	async create( createBuildingDto ): Promise<Building[]> {
		return await this.buildingRepository.save( createBuildingDto );
	}

	async findAll(): Promise<Building[]> {
		return await this.buildingRepository.find();
	}

	async findOne( id ): Promise<Building> {
		return await this.buildingRepository.findOneOrFail( { where: { id } } );
	}

	async remove( id ): Promise<DeleteResult> {
		return await this.buildingRepository.delete( { id } );
	}
}
