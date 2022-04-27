import { Module } from '@nestjs/common';
import { HealthController } from './health/health.controller';
import { EmployeeController } from './employee/employee.controller';

@Module({
  imports: [],
  controllers: [HealthController, EmployeeController],
  providers: [],
})
export class AppModule {
}
