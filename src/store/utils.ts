import  modules  from './modules';
import user from './modules/user';
//获取所有modules中的getters

type GetGetter<Module> = Module extends { getters:infer G } ? G:unknown;

type GetGetters<M> = {
    [K in keyof M] : GetGetter<M[K]>;
};

type ModulesGetters = GetGetters<typeof modules>;

// type xx = GetGetters<typeof modules>;
type AddPrefix<Prefix,Keys> = `${Prefix & string}/${Keys & string}`;
type GetSpliceKey<Module,Key> = AddPrefix<Key,keyof Module>; 
type GetSpliceKeys<Modules> = {
    [K in keyof Modules]:GetSpliceKey<Modules[K],K>;
}[keyof Modules];


type GetSpliceObj<T> = {
    [k in GetSpliceKeys<T>];
};

type Getters = GetSpliceObj<ModulesGetters>;