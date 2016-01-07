
///<reference path="../../dist/android-ui.d.ts"/>
///<reference path="../gen/R/layout.ts"/>

module sample.app {
    import Activity = android.app.Activity;
    import R = sample.app.R;

    export class SampleFrameLayoutActivity extends Activity {
        onCreate():void {
            this.setContentView(R.layout.sample_framelayout);
        }
    }
}