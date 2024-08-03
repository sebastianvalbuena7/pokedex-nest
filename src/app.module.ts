import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    // * Configurar variables de entorno
    ConfigModule.forRoot(),

    // * Servir contenido estatico
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public')
    }),

    // * Usar mongodb
    MongooseModule.forRoot(process.env.MONGODB),

    // * Importar modulo de pokemon
    PokemonModule,

    CommonModule,

    SeedModule,

    HttpModule
  ]
})
export class AppModule { }
