class Employee {

    constructor(name, dateStart, baseSalary) {
        this.name = name;
        this.dateStart = dateStart;
        this.baseSalary = baseSalary;
    }

}

function calculateYears(dateStart) {
    const start = new Date(dateStart);
    const end = new Date();
    const diffTime = Math.abs(end - start);
    const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365);
  
    return diffYears;
}

class SalesPerson extends Employee {

    constructor(name, dateStart, baseSalary, goal, benefits, area) {
        super(name, dateStart, baseSalary);
        this.area = area;
        this.goal = goal;
        this.benefits = benefits;
        this.monitored = 0;
    }

    sumBenefits(benefits) {
        const sum = benefits.reduce((acc, curr) => {
            return acc += curr;
        }, 0);

        return sum;
    }

    hasWorkedOneYear() {
        const period = calculateYears(this.dateStart);
        return period >= 1;
    }

    success() {
        let sum = this.sumBenefits(this.benefits);
        
        const period = this.hasWorkedOneYear();

        if (!period) {
            let goal30 = this.goal * 0.3;
            let goal80 = this.goal * 0.8;
        
            if (sum < goal30) {
                this.monitored = 1;
                return 'low success';
            }
            
            if (sum >= goal30 && sum < goal80) {
                this.monitored = 0;
                return 'medium success';
            }

            this.monitored = 0;
            return 'high success';
        }

        else {
            let goal50 = this.goal * 0.5;
            let goal90 = this.goal * 0.9;

            if (sum < goal50) {
                this.monitored = 1;
                return 'low success';
            }
            
            if (sum >= goal50 && sum < goal90) {
                this.monitored = 0;
                return 'medium success';
            }

            this.monitored = 0;
            return 'high success';
        }

    }

    successInPercents() {
        this.success();
        return (this.sumBenefits(this.benefits) / this.goal) * 100;
    }

    salary() {
        return this.baseSalary + (this.sumBenefits(this.benefits) * 0.2);
    }

    toString() {
        return `Employee ${this.name} has ${this.successInPercents().toFixed(2)} % success rate and ${this.monitored == 0 ? 'is not' : 'is'} being monitored.`;
    }
}

class SalesDepartment {
    constructor() {
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    updateMonitoring() {
        this.employees.forEach(employee => {
            const status = employee.success();
            console.log(`${employee.name} has ${status} and a salary of ${employee.salary()}`);
        })
    }

    checkMonitoring() {

        this.employees.forEach(employee => {
            const status = employee.success();
            console.log(`${employee.name} has ${status} and a salary of ${employee.salary()}`);
        })

    }

    print() {
        this.employees.forEach(employee => {
            console.log(employee.toString());
        })
    }

    successRate(country) {

        let sum = 0;
        let howMany = 0;

        this.employees.forEach(employee => {
            const status = employee.success();
            const area = employee.area;
            if(status !== 'low success' && country == area) {
                sum += Number(employee.successInPercents().toFixed(2));
                howMany++;
            }
        })

        if(sum != 0) {
            console.log(`The average success rate for ${country} is ${(sum / howMany).toFixed(2)} %`);
        }
        else {
            console.log(`The average success rate for ${country} is 0 %`);
        }
        
    }
}

var salesDepartment = new SalesDepartment();

var emp1 = new SalesPerson("Mark Smiths", new Date(2022, 8, 3), 20000, 5000, [400, 350, 500], "US");
var emp2 = new SalesPerson("Sandy Adams", new Date(2022, 5, 2), 22000, 7000, [500, 400, 600, 450, 550, 400, 350, 450], "Eastern Europe");
var emp3 = new SalesPerson("Bill Jonas", new Date(2022, 3, 1), 21000, 10000, [650, 700, 800, 750, 600, 750, 700, 800, 750, 800, 850], "US");
var emp4 = new SalesPerson("Sasha Denson", new Date(2021, 9, 1), 30000, 15000, [1200, 1500, 1350, 1300, 1400, 900], "US");
var emp5 = new SalesPerson("Chris Ree", new Date(2021, 7, 25), 27000, 14000, [850, 1000, 1150, 1050, 1100], "Eastern Europe");
var emp6 = new SalesPerson("Emily Lee", new Date(2020, 12, 2), 35000, 20000, [1700, 1850, 2000, 1900, 1950, 1800, 1750, 1900, 2000, 1950], "US");

salesDepartment.addEmployee(emp1);
salesDepartment.addEmployee(emp2);
salesDepartment.addEmployee(emp3);
salesDepartment.addEmployee(emp4);
salesDepartment.addEmployee(emp5);
salesDepartment.addEmployee(emp6);

salesDepartment.print();
console.log();

salesDepartment.successRate("US");