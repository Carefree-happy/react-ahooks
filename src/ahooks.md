# ahooks
实际地址：https://ahooks.js.org/hooks/use-history-travel

## useRequest
### Quick Start
useRequest 是一个强大的异步数据管理 Hooks。对于 React 项目中的网络请求场景，useRequest 已经足够了。
useRequest 通过插件模式组织代码，核心代码非常简单，可以很容易地扩展为更高级的功能。当前功能包括：
- 自动/手动请求
- 轮询
- 防抖
- 节流
- 刷新窗口焦点
- 错误重试
- 加载延迟
- 重新验证时失效
- 缓存
接下来，我们从两个最简单的例子来认识一下 useRequest。

1. Default usage
useRequest的第一个参数是一个异步函数，在组件第一次加载时会自动触发。同时自动管理异步函数的加载、数据、错误的状态。

2. Manual trigger
如果设置了options.manual = true，则默认不会执行useRequest，需要通过run触发执行。

### Basic usage
在本节中，我们将介绍 useRequest 的核心和基本功能，即 useRequest 内核的功能。

1. 默认请求
默认情况下，useRequest的第一个参数是一个异步函数，在组件初始化时自动执行。同时自动管理异步函数的加载、数据、错误的状态。

2. 手动触发
如果options.manual = true设置了，useRequest则默认不执行，需要通过run或者runAsync触发执行。

run或者runAsync之间的区别是：
- run是一个普通的同步函数，我们会自动捕捉异常，可以options.onError用来处理异常的行为。
- runAsync是一个异步函数，它返回一个Promise. 如果你习惯runAsync调用它，则意味着你需要自己捕获异常。

我们将通过编辑用户名的简单场景来演示run和runAsync区别。

使用run(username)来编辑用户名，需要使用onSuccess and onError来处理成功和失败。
使用runAsync(username)编辑用户名。这时候就必须通过 catch 来捕获异常。

3. 生命周期
useRequest提供如下生命周期供你在异步函数的不同阶段做一些处理。
- onBefore: 在请求之前触发
- onSuccess: 请求解决时触发
- onError: 当请求被拒绝时触发
- onFinally: 请求完成时触发

4. 刷新（重复上一次请求）
useRequest提供refresh和refreshAsync方法，以便我们可以使用最后一个参数重新运行请求。

如果在读取用户信息的场景中
- 首先读取ID为1的用户信息run(1)
- 其次通过一些方式更新了用户信息
- 最后想重新发起上一个请求，那么我们可以使用refresh而不是run(1)，这在参数复杂的场景中非常有用
5. 立即更改数据
useRequest提供mutate，它可以立即修改data.

mutate的用法与React.setState一致，支持：mutate(newData)和一致mutate((oldData) => newData)。
在下面的示例中，我们演示了一个 mutate 的场景。
我们已经修改了用户名，但是我们不想等到请求成功后再给用户反馈。
而是直接修改数据，然后在后台调用修改请求，在请求返回后提供额外的反馈。

6. 取消请求
useRequest 提供了一个取消函数，可以取消请求。同时，useRequest 会在以下时机自动取消当前请求：
- 当组件正在卸载时，正在进行的请求将被取消
- 当上一个请求还没有返回时，如果发起下一个请求，则取消上一个请求

7. 参数管理
useRequest 返回的 params 会记录 service 的参数。例如，如果触发 run(1, 2, 3)，则 params 等于 [1, 2, 3]。
如果我们设置options.manual = false，则可以通过options.defaultparams首次设置调用服务的参数。

结果：
|属性|描述|类型|
|---|---|---|
|data|服务器返回的数据|TData｜undefined|
|error|服务器抛出的异常| Error｜undefined|
|loading|服务器是否异常|boolean|
|params|正在执行的服务的参数数组。比如你触发了run(1, 2, 3)，那么params就等于[1, 2, 3]?|TParams | []|
|run|手动触发服务的执行，参数会传给服务;自动处理异常，通过onError反馈|(...params : TParams) => void|
|runAsync|用法和run一样，只是返回一个Promise，所以需要自己处理异常。|(...params: TParams) => Promise<TData>|
|refresh|使用最后一个参数，再次调用 run|() => void|
|refreshAsync|使用最后一个参数，() => Promise<TData>|TData｜undefined|
|mutate|直接修改数据|(data?: TData / ((oldData?: TData) => (TData / undefined))) => void|
|cancel|服务器是否异常|() => void|

[TS2304: Cannot find name 'setTimeout' | 'console' | 'localStorage'.](https://code.dblock.org/2019/07/04/getting-started-with-typescript.html) ESNext, DOM即可

[Property 'entries' does not exist on type 'ObjectConstructor'.](https://github.com/pyscript/pyscript/issues/703) 记得重启项目

```ts
Promise 添加返回类型判断
export function fetchCount(amount: number) {
    return new Promise<{data: number}>((resolve) =>
        setTimeout(() => resolve({ data: amount }), 500)
    );
}

export const incrementAsync = createAsyncThunk(
    "counter/fetchCount",
    async (amount: number) => {
        const response = await fetchCount(amount);
        return response.data; // red wave info under response
    }
);
```