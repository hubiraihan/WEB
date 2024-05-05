function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

Color.prototype.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
}

Color.prototype.rgba = function (a = 1.0) {
    const { r, g, b } = this;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

Color.prototype.hex = function () {
    const { r, g, b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}



// 1. 空のプレーンな JavaScript オブジェクトを生成します。
// 2. 新しいオブジェクトにプロパティ (__proto__) を追加し、コンストラクター関数のプロトタイプオブジェクトに結びつけます。
// メモ: コンストラクター関数のプロトタイプに追加されたプロトタイプやオブジェクトは、そのためそのコンストラクター関数で（new を使用して）生成されたすべてのインスタンスからアクセスできます。

// 3. 新しく生成されたオブジェクトインスタンスを this コンテキストとして結びつけます。 （すなわち、コンストラクター関数内の this へのすべての参照は、最初のステップで作成されたオブジェクトを参照するようになります。）
// 4. 関数がオブジェクトを返さない場合は this を返します。

const color1 = new Color(40, 255, 60);
const color2 = new Color(0, 0, 0);