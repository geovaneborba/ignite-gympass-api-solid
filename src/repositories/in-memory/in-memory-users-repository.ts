import { UsersRepository } from '@/repositories/users-repository'
import { Prisma, User } from '@prisma/client'
import { randomUUID } from 'node:crypto'

export class InMemoryUsersRepository implements UsersRepository {
  public users: User[] = []

  async findById(id: string): Promise<User | null> {
    const user = this.users.find((item) => item.id === id)

    return user || null
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = this.users.find((user) => user.email === email)

    return user || null
  }

  async create(data: Prisma.UserCreateInput): Promise<User> {
    const user: User = {
      id: randomUUID(),
      name: data.name,
      email: data.email,
      password_hash: data.password_hash,
      created_at: new Date(),
      role: data.role ?? 'MEMBER',
    }

    this.users.push(user)

    return user
  }
}
