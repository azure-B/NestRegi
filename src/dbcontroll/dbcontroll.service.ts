import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { verfiyDTO } from 'src/email-verify/dto/email-verify.dto';
import { verify } from 'src/email-verify/entitiy/email-verify.entity';
import { Repository } from 'typeorm';

@Injectable()
export class dbcontrollService {
  constructor(
    @InjectRepository(verify)
    private readonly Repo: Repository<verify>,
  ) {}

  async create(dto: verfiyDTO) {
    const create = this.Repo.create(dto);
    return await this.Repo.save(create);
  }

  async findOne(userId: string) {
    return await this.Repo.findOne({ where: { userId } });
  }

  async update(dto: verfiyDTO) {
    const update = await this.Repo.findOne({ where: { userId: dto.userId } });

    Object.assign(update, dto);

    await this.Repo.save(update);
    return update;
  }
}
