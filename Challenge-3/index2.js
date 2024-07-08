function calculateNetSalary() {
    let basicSalary = parseFloat(prompt("Enter the basic salary:"));
    let benefits = parseFloat(prompt("Enter the benefits:"));

    let grossSalary = basicSalary + benefits;

    // PAYE calculation
    function calculateTax(grossSalary) {
        if (grossSalary <= 24000) {
            return grossSalary * 0.1;
        } else if (grossSalary <= 32333) {
            return grossSalary * 0.25;
        } else {
            return grossSalary * 0.3;
        }
    }

    let payee = calculateTax(grossSalary);

    // NHIF Deductions
    function calculateNHIF(grossSalary) {
        if (grossSalary <= 5999) return 150;
        if (grossSalary <= 7999) return 300;
        if (grossSalary <= 11999) return 400;
        if (grossSalary <= 14999) return 500;
        if (grossSalary <= 19999) return 600;
        if (grossSalary <= 24999) return 750;
        if (grossSalary <= 29999) return 850;
        if (grossSalary <= 34999) return 900;
        if (grossSalary <= 39999) return 950;
        if (grossSalary <= 44999) return 1000;
        if (grossSalary <= 49999) return 1100;
        if (grossSalary <= 59999) return 1200;
        if (grossSalary <= 69999) return 1300;
        if (grossSalary <= 79999) return 1400;
        if (grossSalary <= 89999) return 1500;
        if (grossSalary <= 99999) return 1600;
        return 1700;
    }

    let nhifDeductions = calculateNHIF(grossSalary);

    // NSSF Deductions
    let nssfDeductions = 400; // Standard rate

    let netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`PAYE: ${payee}`);
    console.log(`NHIF Deductions: ${nhifDeductions}`);
    console.log(`NSSF Deductions: ${nssfDeductions}`);
    console.log(`Net Salary: ${netSalary}`);
}
