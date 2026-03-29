/**
 * --- 请在此处实现响应式核心逻辑 ---
 */
// function reactive(target) { ... }
// function watchEffect(effect) { ... }


/**
 * --- 以下为测试代码，请勿修改 ---
 */
function runTest() {
    console.log('--- 测试开始 ---');
    const logs = [];
    const logger = (msg) => logs.push(msg);

    // 1. 创建响应式对象
    const state = reactive({
        count: 0,
        user: {
            name: 'Alice',
            age: 20
        }
    });

    // 2. 注册副作用函数 A (依赖 state.count)
    watchEffect(() => {
        logger(`[Effect A] 当前 count 为: ${state.count}`);
    });

    // 3. 注册副作用函数 B (依赖 state.user.name 深度属性)
    watchEffect(() => {
        logger(`[Effect B] 用户名变更为: ${state.user.name}`);
    });

    console.log('--- 初始执行完毕 ---');

    // 4. 模拟数据变更
    state.count++; // 应当只触发 Effect A
    
    state.user.name = 'Bob'; // 应当只触发 Effect B，测试深层响应式
    
    state.count = 5; // 应当只触发 Effect A

    // 打印验证
    console.log('实际运行轨迹:');
    logs.forEach((log, index) => console.log(`[${index + 1}] ${log}`));

    console.log('\n--- 期望输出 ---');
    console.log(`[1] [Effect A] 当前 count 为: 0
[2] [Effect B] 用户名变更为: Alice
[3] [Effect A] 当前 count 为: 1
[4] [Effect B] 用户名变更为: Bob
[5] [Effect A] 当前 count 为: 5`);

    console.log('--- 测试结束 ---');
}

runTest();