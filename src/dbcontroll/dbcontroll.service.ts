import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { verfiyDTO } from 'src/email-verify/dto/email-verify.dto';
import { verify } from 'src/email-verify/entitiy/email-verify.entity';
import { usersDTO } from 'src/register/dto/users.dto';
import { users } from 'src/register/entitiy/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class verifyDBService {
  constructor(
    @InjectRepository(verify)
    private readonly Repo: Repository<verify>,
  ) {}

  async create(dto: verfiyDTO): Promise<verfiyDTO> {
    const create = this.Repo.create(dto);
    return await this.Repo.save(create);
  }

  async findOne(userId: string): Promise<verfiyDTO> {
    return await this.Repo.findOne({ where: { userId } });
  }

  async update(dto: verfiyDTO): Promise<verfiyDTO> {
    const update = await this.Repo.findOne({ where: { userId: dto.userId } });

    Object.assign(update, dto);

    await this.Repo.save(update);
    return update;
  }
}

@Injectable()
export class registerDBService {
  constructor(
    @InjectRepository(users) private readonly Repo: Repository<users>,
  ) {}

  async create(dto: usersDTO): Promise<usersDTO> {
    const create = this.Repo.create(dto);
    return this.Repo.save(create);
  }

  async findOne(dto: usersDTO): Promise<usersDTO> {
    return this.Repo.findOne({ where: { userId: dto.userId } });
  }
}
