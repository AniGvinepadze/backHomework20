import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { S } from 'vite/dist/node/types.d-aGj9QkWt';

@Injectable()
export class ExpensesService {
  private expenses = [
    { id: 1, category: 'iphone ', price: 2300 },
    { id: 2, category: 'samung', price: 2333 },
    { id: 3, category: 'asus', price: 4555 },
    { id: 4, category: 'lenovo', price: 1331 },
    { id: 5, category: 'acer', price: 6238 },
  ];
  create(createExpenseDto: CreateExpenseDto) {
    const { category, price } = createExpenseDto;
    const lastID = this.expenses[this.expenses.length - 1]?.id || 0;
    const newExpense = {
      id: lastID + 1,
      category,
      price,
    };
    this.expenses.push(newExpense);
    return newExpense;
  }

  findAll() {
    return this.expenses;
  }

  findOne(id: number) {
    const exoense = this.expenses.find((el) => el.id === id);
    if (!exoense) throw new NotFoundException('post not found');
    return exoense;
  }

  update(id: number, { category, price }: UpdateExpenseDto) {
    const index = this.expenses.findIndex((el) => el.id === id);
    if (index === -1) throw new BadRequestException('post couldnt deleted');
    const updateRequest: { category?: string; price?: number } = {};
    if (category) updateRequest.category = category;
    if (price) updateRequest.price = price;
    this.expenses[index] = {
      ...this.expenses[index],
      ...updateRequest,
    };
    return this.expenses[index];
  }

  remove(id: number) {
    const index = this.expenses.findIndex((el) => el.id === id);
    if (index === -1) throw new BadRequestException('post couldnt deleted');
    const deletedPost = this.expenses.splice(index, 1);
    return deletedPost;
  }
}
