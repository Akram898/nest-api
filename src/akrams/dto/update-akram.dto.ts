import { PartialType } from '@nestjs/mapped-types';
import { CreateAkramDto } from './create-akram.dto';

export class UpdateAkramDto extends PartialType(CreateAkramDto) {}
