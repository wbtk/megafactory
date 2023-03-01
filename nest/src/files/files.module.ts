import { forwardRef, Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { File } from './entities/file.entity';
import { UsersModule } from 'src/users/users.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [FilesController], 
  providers: [FilesService],
  imports: [
    SequelizeModule.forFeature([File]),
    forwardRef(() => UsersModule),
    forwardRef(() => AuthModule)
  ],
  exports: [FilesService]
})
export class FilesModule {}
