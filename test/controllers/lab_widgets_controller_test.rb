require 'test_helper'

class LabWidgetsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @lab_widget = lab_widgets(:one)
  end

  test "should get index" do
    get lab_widgets_url
    assert_response :success
  end

  test "should get new" do
    get new_lab_widget_url
    assert_response :success
  end

  test "should create lab_widget" do
    assert_difference('LabWidget.count') do
      post lab_widgets_url, params: { lab_widget: { laboratory: @lab_widget.laboratory, name: @lab_widget.name, rule: @lab_widget.rule, status: @lab_widget.status, widget: @lab_widget.widget } }
    end

    assert_redirected_to lab_widget_url(LabWidget.last)
  end

  test "should show lab_widget" do
    get lab_widget_url(@lab_widget)
    assert_response :success
  end

  test "should get edit" do
    get edit_lab_widget_url(@lab_widget)
    assert_response :success
  end

  test "should update lab_widget" do
    patch lab_widget_url(@lab_widget), params: { lab_widget: { laboratory: @lab_widget.laboratory, name: @lab_widget.name, rule: @lab_widget.rule, status: @lab_widget.status, widget: @lab_widget.widget } }
    assert_redirected_to lab_widget_url(@lab_widget)
  end

  test "should destroy lab_widget" do
    assert_difference('LabWidget.count', -1) do
      delete lab_widget_url(@lab_widget)
    end

    assert_redirected_to lab_widgets_url
  end
end
