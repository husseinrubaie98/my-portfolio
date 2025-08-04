export class Skill {
    name: string;
    level: number; // 1 to 4
    description: string;

    constructor(name: string, level: number, description: string) {
        this.name = name;
        this.level = level;
        this.description = description;
    }
}