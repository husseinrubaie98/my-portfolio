export class Experience {
    position: string;
    company: string;
    duration: string;
    workSummary: string;
    isCurrent: boolean = false;
    
    constructor(
        position: string,
        company: string,
        duration: string,
        workSummary: string,
        isCurrent: boolean = false
    ) {
        this.position = position;
        this.company = company;
        this.duration = duration;
        this.workSummary = workSummary;
        this.isCurrent = isCurrent;
    }
}