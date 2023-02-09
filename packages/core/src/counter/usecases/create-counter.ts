import { Usecase } from "../../base/usecase.interface";
import { Counter } from "../entities/counter.entity";
import {CounterRepository} from '../counter-repositiory.interface'

export abstract class CreateCounterUsecase implements Usecase<Counter>{
    abstract execute(...args:any[]): Counter
}

export class CreateCounterImpl implements CreateCounterUsecase{
    constructor(private counterRepository:CounterRepository) {}

    execute(...args:any[]): Counter {
        return this.counterRepository.createCounter({
            id:Math.random().toString().substring(2),
            currentCount:0,
            decrementAmount:1,
            incrementAmount:1,
            label:'new Counter'
        })
    }
}
