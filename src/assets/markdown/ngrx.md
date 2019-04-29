# NGRX State Management

Overview of Statement Mangement using NGRX

# Background

---

There are many benefits to having a store-driven application. There is strong tooling for debugging, ability to test various states of the application, performance, readability, removing business logic for components, and having a centralize store acting as a single source of truth.

# @NGRX/Store

---

The flow of data and their events are based on the principals of reactive programming. Utilizing RxJS's observables, and operators to transform data and allow components to be designed in a reactive way. (Don't ask for data but instead react when the data arrives)

### Store

This is the client side database which reflects the current state of the application. It provides a single source of truth for the components. 

    export interface AppState {
      user: fromUser.UserState;
      notifications: fromNotifications.NotificationState;
      staff: fromStaff.StaffState;
      primaryContact: fromPrimaryContact.PrimaryContactState;
      deposits: fromDeposits.DepositState;
      bank: fromBank.BankState;
      fincen: fromFincen.FincenState;
      dispensary: fromDispensary.DispensaryState;
      sales: fromSales.SalesState;
      salesfile: fromSalesFile.SalesFileState;
      vendors: fromVendor.VendorState;
    }

The `store` is composed of smaller feature states which gives the ability for components to only being listening to the relevant store(s). 


### Reducers

A `reducer` is a pure function (no side effects, and given the same inputs will return the same vlaue). Our store reducers accept two arguments the previous `state`, and an `action` composed of a type and optional payload. 

    export interface Reducer<T> {
      (state: T, action: Action): T;
    }

The reducers are responsible for handling the transition of one state to the next based on the action type. Each feature of the store is composed of its own `reducer`.

    export const counter: Reducer<number> = (state: number = 0, action: Action) => {
        switch(action.type){
            case 'INCREMENT':
                return state + 1;
            case 'DECREMENT':
                return state - 1;
            default:
                return state;
        }
    };

The `reducer` determines the next state based on the action type. This is accomplished by utilizing a `switch` statement on the `action.type` . The `reducer` must always return the current state therefore a `default` case has been added.

### Actions

An `action` is how we are able to communicate to the reducers that a state transition should occur. An `action` is composed of a type (this is what a reducer uses in the switch statement) and a optional payload (data). An `action` can be `dispatched` whenever an event or user interaction occurs in the application.

    export interface Action {
      type: string;
      payload?: any;
    }

    handleButtonClicked() => {
    	dispatch({type: 'DECREMENT'});
    }

### Understanding the Data Flow

The `store` is composed of various feature states that delegate to their feature `reducer`. `Actions` are `dispatched` in our components based on a user interaction or event. This `action` is composed of a type and optional payload which is used in the `reducer` to determine the state transition. 

![](Untitled-c55ff849-1e0a-4799-bd6f-9920be7b735e.png)

State-based dataflow, @ngrx official documents

### Selectors

`Selectors` are pure functions that help to select slices of the state. A store is an observable so utilizing the robust RxJS Operation library allows for shaping the state simple. `Selector` composition allows up to 8 `selector` functions, and can be used to select multiple pieces of the same state. This gives us the ability to control the shape of the data before it even touches the component.

    const selectUser = (state: AppState) => state.user;
    
    const selectUserId = createSelector(
    	selectUser,
    	(state: UserState) => state.user.id
    );

### Effects

`Effects` utilize RxJS to provide a method for handling side effects. A side effect is something that occurs outside of the function other than its return value. `Effects` use streams to provide new actions based on external events such as websockets. A benefit of `effects` is the ability to isolate the components from these side effects. Effects are services that listen, and filter all dispatched actions based on the type they are interested in. An `effect` can than perform a task such as a network call and than return a new dispatched action.

    @Effect()
      loadUser$ = this.actions$
        .pipe(
          ofType('[User] Load User By Id'),
          mergeMap((action: LoadUser) => this.userDataService.userById(action.payload)
            .pipe(
              map(user => ({ type: '[User] User Loaded By Id', payload: user })),
              catchError(() => EMPTY)
            ))
          )
        );