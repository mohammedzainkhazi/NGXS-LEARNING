import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext, StateToken } from "@ngxs/store";
import { DecrementValue, IncrementValue, ResetValue, SetValue } from "./simple-value.actions";
import { SimpleValueModel } from "./simple-value.model";

const simpleValueStateToken = new StateToken<SimpleValueModel>(
    'simpleValue'
);

@State<SimpleValueModel>({
    name: simpleValueStateToken,
    defaults: {
        name:"Zain",
        value: 0,
    },
})
@Injectable()
export class SimpleValueState {
    @Action(IncrementValue)
    incrementValue(ctx: StateContext<SimpleValueModel>) {
        const state = ctx.getState();
        let stateValue = state.value;
        stateValue++;
        ctx.setState({
            ...state,
            value: stateValue
        })
    }

    @Action(DecrementValue)
    decrementValue(ctx: StateContext<SimpleValueModel>) {
        const state = ctx.getState();
        let stateValue = state.value;
        stateValue--;
        ctx.setState({
            ...state,
            value: stateValue
        })
    }
    @Action(ResetValue)
    resetValue(ctx: StateContext<SimpleValueModel>) {
        const state = ctx.getState();
        let stateValue = state.value;
        stateValue++;
        ctx.setState({
            ...state,
            value: 0
        })
    }

    @Action(SetValue)
    setValue(ctx: StateContext<SimpleValueModel>,action:SetValue) {
        const state = ctx.getState();
        let stateValue = state.value;
        stateValue++;
        ctx.setState({
            ...state,
            value: action.payload
        })
    }
    @Selector()
    static value(state:SimpleValueModel){
        return state.value;
    }
    static Name(state:SimpleValueModel){
        return state.name;
    }
}