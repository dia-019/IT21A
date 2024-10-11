
class Employee {
    #name;
    #baseSalary;

    setName(val) {
        this.#name = val;
    }
    setBaseSalary(val) {
        this.#baseSalary = val;
    }
    getName() {
        return this.#name;
    }
    getSalary() {
        let bonus = 1000;
        return this.#baseSalary + bonus;
    }
}

document.getElementById('submit').addEventListener('click', () => {
    const emp = new Employee();
    const name = document.getElementById('name').value;
    const salary = parseFloat(document.getElementById('salary').value);

    emp.setName(name);
    emp.setBaseSalary(salary);

    document.getElementById('outputName').textContent = `Name: ${emp.getName()}`;
    document.getElementById('outputSalary').textContent = `Total Salary: ${emp.getSalary()}`;
});