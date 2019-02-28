import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BuildingModule } from './building/building.module';
import { PersonModule } from './person/person.module';

@Module( {
	imports: [
		TypeOrmModule.forRoot( {
			type: 'mysql',
			host: 'vvv.dev',
			port: 3306,
			username: 'external',
			password: 'external',
			database: 'attendance',
			entities: [ __dirname + '/**/*.entity{.ts,.js}' ],
			synchronize: true,
		} ),
		PersonModule,
		BuildingModule,
	],
	controllers: [ AppController ],
	providers: [ AppService ],
} )
export class AppModule {
}
