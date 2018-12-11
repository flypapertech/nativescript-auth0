import ComponentName = android.content.ComponentName;
import Context = android.content.Context;
import Uri = android.net.Uri;
import CustomTabsClient = android.support.customtabs.CustomTabsClient;
import CustomTabsServiceConnection = android.support.customtabs.CustomTabsServiceConnection;
import { CustomTabsOptions } from './customTabsOptions';
export declare class CustomTabsController extends CustomTabsServiceConnection {
    private static readonly TAG;
    private static readonly MAX_WAIT_TIME_SECONDS;
    private static readonly ACTION_CUSTOM_TABS_CONNECTION;
    private static readonly CHROME_STABLE;
    private static readonly CHROME_SYSTEM;
    private static readonly CHROME_BETA;
    private static readonly CHROME_DEV;
    private readonly context;
    private readonly session;
    private readonly sessionLatch;
    private readonly preferredPackage;
    private customTabsOptions;
    private isBound;
    private sessionLatchReady;
    constructor(context: Context, browserPackage?: string);
    clearContext(): void;
    setCustomizationOptions(options?: CustomTabsOptions): void;
    getCustomizationOptions(): CustomTabsOptions;
    onCustomTabsServiceConnected(componentName: ComponentName, customTabsClient: CustomTabsClient): void;
    onServiceDisconnected(componentName: ComponentName): void;
    bindService(): void;
    unbindService(): void;
    launchUri(uri: Uri): void;
    static getBestBrowserPackage(context: Context): string;
}