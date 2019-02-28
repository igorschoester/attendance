import {Body, Controller, Get, Param, Post, Delete} from '@nestjs/common';
import {DeleteResult} from 'typeorm';
import {BuildingService} from './building.service';
import {Building} from './building.entity';
import {CreateBuildingDto} from './create-building.dto';

@Controller('building')
export class BuildingController {
    constructor(private readonly buildingService: BuildingService) {
    }

    @Post()
    async create(@Body() createBuildingDto: CreateBuildingDto): Promise<Building[]> {
        return await this.buildingService.create(createBuildingDto);
    }

    @Get()
    async findAll(): Promise<Building[]> {
        return await this.buildingService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id): Promise<Building> {
        return await this.buildingService.findOne(id);
    }

    @Delete(':id')
    async remove(@Param('id') id): Promise<DeleteResult> {
        return await this.buildingService.remove(id);
    }
}
