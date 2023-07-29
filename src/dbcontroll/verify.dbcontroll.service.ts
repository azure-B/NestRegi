import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { verfiyDTO } from 'src/email-verify/dto/email-verify.dto';
import { Verify } from 'src/email-verify/entitiy/email-verify.entity';
import { Repository } from 'typeorm';

@Injectable()
export class verifyDB {
  constructor(
    @InjectRepository(Verify) private readonly Repo: Repository<Verify>,
  ) {}

  async create(dto: verfiyDTO) {
    const create = this.Repo.create(dto);
    return await this.Repo.save(create);
  }

  findOne(userId: string) {
    return this.Repo.find({ where: { userId } });
  }

  async update(dto: verfiyDTO) {
    const update = await this.Repo.findOne({ where: { userId: dto.userId } });

    Object.assign(update, dto);

    await this.Repo.save(update);
    return update;
  }
}
