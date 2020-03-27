/* eslint-disable */
/**
 * @file concat主函数
 * @author zhangjingyuan02
 */
export default `
// start函数
void main(void) {
    ivec4 oPos = getOutputTensorPos();
    // 输出坐标转换为输入坐标
	int sumVal = oPos.g + oPos.a * channel_out + oPos.b * channel_out * width_shape_out + oPos.r * channel_out * width_shape_out * height_shape_out;
    ivec4 new_oPos = transferFromNHWCtoNCHW(sumVal, channel_out, width_shape_out, height_shape_out, total_shape_out);
    float o = 0.0;
    if (new_oPos[dim] > inputs_dim[0] - 1) {
        new_oPos[dim] = new_oPos[dim] - inputs_dim[0];
        o = getValueFromTensorPos_counter(new_oPos.r, new_oPos.g, new_oPos.b, new_oPos.a);
    }
    else {
        o = getValueFromTensorPos_origin(new_oPos.r, new_oPos.g, new_oPos.b, new_oPos.a);
    }
	setOutput(float(o));
}
`;