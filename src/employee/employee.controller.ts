import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';

type Employee = {
  /**
   * id
   */
  id: string,

  /**
   * 姓名
   */
  name: string,

  /**
   * 部门
   */
  dept: string,

  /**
   * 基本工资
   */
  baseSalary: number,

  /**
   * 入职日期
   */
  hireDate: string,

  /**
   * 工龄
   */
  seniority: number,

  /**
   * 绩效
   */
  perf: number,

  /**
   * 奖金
   */
  bonus: number,

  /**
   * 工资
   */
  salary: number,
}

/**
 *  {Id: "name", Title: "姓名", Type: "string", Exps: ""},
 *  {Id: "dept", Title: "部门", Type: "string", Exps: ""},
 *  {Id: "baseSalary", Title: "基本工资", Type: "number", Exps: ""},
 *  {Id: "perf", Title: "绩效", Type: "number", Exps: ""},
 *  {Id: "bonus", Title: "奖金", Type: "number", Exps: "IF(perf<=3.5,500,1000)"},
 *  {Id: "salary", Title: "工资", Type: "number", Exps: "SUM(baseSalary,bonus)"},
 */
@Controller('employee')
export class EmployeeController {
  private employees: Employee[] = [
    {
      id: '10001',
      name: '张三',
      dept: '研发部',
      baseSalary: 5000,
      hireDate: '2022-04-27',
      seniority: 0,
      perf: 3.75,
      bonus: 0,
      salary: 0,
    }, {
      id: '20002',
      name: '李四',
      dept: '研发部',
      baseSalary: 7500,
      hireDate: '2022-04-27',
      seniority: 0,
      perf: 3.5,
      bonus: 0,
      salary: 0,
    }, {
      id: '30003',
      name: '王五',
      dept: '研发部',
      baseSalary: 4500,
      hireDate: '2022-04-27',
      seniority: 0,
      perf: 3.25,
      bonus: 0,
      salary: 0,
    },
  ];

  @Get()
  employee(@Res() res: Response): void {
    res.status(HttpStatus.OK).json(this.employees);
  }
}
