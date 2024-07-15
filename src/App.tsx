import * as React from 'react';
import { hot } from "react-hot-loader/root";
import WebSocket from './scene/1000useWebSocket';

function App() {
  return (
    <>
      {/* ## useRequest */}
      {/* ### QuickStart */}
      {/* <DefaultUsage /> */}
      {/* <ManualTrigger /> */}

      {/* ### Basic Usage */}
      {/* <DefaultRequest /> */}
      {/* <ManualTrigger /> */}
      {/* <TheLifeCycle /> */}
      {/* <Refresh /> */}
      {/* <ChangeDataImmediately /> */}
      {/* <CancelRequest /> */}
      {/* <ParameterManagement /> */}

      {/* ### Loading Delay */}
      {/* <LoadingDelay /> */}

      {/* ### Polling */}
      {/* <Polling /> */}
      {/* <PollingErrorRetry /> */}

      {/* ### Ready */}
      {/* <AutomaticMode /> */}
      {/* <ManualMode /> */}

      {/* <RefreshDeps /> */}

      {/* <RefreshOnWindowFocus /> */}

      {/* <Debounce /> */}

      {/* <SWR /> */}
      {/* <KeepYourDataFresh /> */}
      {/* <DataSharing /> */}
      {/* <ParametersCache/> */}
      {/* <ClearCache /> */}
      {/* <CustomCache /> */}

      {/* ## Scene */}
      {/* 封装了常用的 Fusion Form 与 Fusion Table 联动逻辑。 */}
      {/* <UseAntdTable /> */}
      {/* <LinkageTable /> */}
      {/* <InitTable /> */}
      {/* <FormValidation /> */}
      {/* <FormCacheKey/> */}

      {/* useInfiniteScroll 封装了常见的无限滚动逻辑。 */}
      {/* <InfiniteScroll /> */}
      {/* <PagingBySize/> */}
      {/* <ScrollMore /> */}
      {/* <DataReload/> */}
      {/* <DataReload /> */}
      {/* <DataMutation /> */}

      {/* usePagination 基于 useRequest 实现，封装了常见的分页逻辑。 */}
      {/* <PaginationDefault /> */}
      {/* <ParamsMore /> */}
      {/* <RefreshDeps /> */}

      {/* 管理动态列表状态，并能生成唯一 key 的 Hook。 */}
      {/* <DynamicList/> */}
      {/* <DynamicForm/> */}
      {/* <DynamicForm2/> */}
      {/* <DynamicForm3/> */}

      {/* <VirtualList/> */}
      {/* <DynamicItemHeight /> */}

      {/* 管理历史信息 */}
      {/* <BasicUsage /> */}
      {/* <TodoList /> */}
      {/* <LimitMaximum /> */}

      {/* 管理网络 */}
      {/* <Network /> */}

      {/* 管理计时 */}
      {/* <CountdownToTargetTime /> */}
      {/* <CountdownDynamic /> */}
      {/* <CountdownToLeftTime /> */}

      {/* 管理计算器 */}
      {/* <Counter /> */}

      {/* 管理文本选择器 */}
      {/* <TextSelection /> */}
      {/* <TextSelectionSpecifiedArea /> */}
      {/* <TextSelectionTranslate /> */}
      {/* <WebSocket /> */}
    </>
  )
}

export default hot(App);
