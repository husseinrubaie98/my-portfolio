import { Skill } from "./Skill";

export class ExperienceCategory {
    categoryName: string;
    skillSet: Skill[];
    icon: string;

    constructor(categoryName: string, skillSet: Skill[], icon: string = "") {
        this.categoryName = categoryName;
        this.skillSet = skillSet;
        this.icon = icon;
    }
}