import './PillControl.scss'

export function PillControl() {
    return (
        <>
            <input type="checkbox" name="switch" className="pill-switch" id="pillSwitch" />
            <label htmlFor="pillSwitch">
                <span className="label">Animate</span>
            </label>
        </>
    );
}