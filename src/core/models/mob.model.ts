import { ItemModel } from "./item.model";

export class MobModel {
    public id: string;
    public name: string;
    public level: number;
    public expDrop: number;
    public itemsDrop: ItemModel[];
    public health: number;
    public chanceToAppear: number;

    constructor(id: string, name: string, level: number, expDrop: number,
        itemsDrop: ItemModel[], health: number, chanceToAppear: number) {
        this.id = id;
        this.name = name;
        this.level = level;
        this.expDrop = expDrop;
        this.itemsDrop = itemsDrop;
        this.health = health;
        this.chanceToAppear = chanceToAppear;
    }

    toObject(): object {
        const mobObj = {
            id: this.id,
            name: this.name,
            level: this.level,
            expDrop: this.expDrop,
            itemsDrop: this.itemsDrop,
            health: this.health,
            chanceToAppear: this.chanceToAppear,
        };

        return mobObj;
    }

    static fromData(data: FirebaseFirestore.DocumentData): MobModel {
        const model = new MobModel(
            data.id,
            data.name,
            data.level,
            data.expDrop,
            [],
            data.health,
            data.chanceToAppear,
        );
        return model;
    }
}