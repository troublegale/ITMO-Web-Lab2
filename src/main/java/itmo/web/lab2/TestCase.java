package itmo.web.lab2;

public class TestCase {

    private final float x;
    private final float y;
    private final int r;
    private final boolean inArea;

    public TestCase(float x, float y, int r) {
        this.x = x;
        this.y = y;
        this.r = r;
        inArea = calculateIsInArea();
    }

    public float getX() {
        return x;
    }

    public float getY() {
        return y;
    }

    public float getR() {
        return r;
    }

    public boolean isInArea() {
        return inArea;
    }

    private boolean calculateIsInArea() {
        if (x > 0) {
            if (y > 0) {
                return checkIsInRectangle();
            }
            return checkIsInTriangle();
        }
        return y <= 0 && checkIsInQuarterCircle();
    }

    private boolean checkIsInRectangle() {
        return x <= (float) r / 2 && y <= r;
    }

    private boolean checkIsInTriangle() {
        return x >= (2 * x - r);
    }

    private boolean checkIsInQuarterCircle() {
        return (x * x + y * y) <= r * r;
    }

}
