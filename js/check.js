$(function(){
    /*
    *˼·�������Ϊÿһ��required��ӱ���ı�ǣ���each()������ʵ�֡�
    *��each()���������Ǵ���һ��Ԫ�ء�Ȼ��ͨ��append()������������Ԫ�ؼ��뵽��Ԫ�غ��档
    *�������this�õĺܾ��裬ÿһ�ε�this����Ӧ����Ӧ��inputԪ�أ�Ȼ���ȡ��Ӧ�ĸ�Ԫ�ء�
    *Ȼ��ΪinputԪ�����ʧȥ�����¼���Ȼ������û������ʼ�����֤��
    *��������һ���ж�is()��������û���������Ӧ�Ĵ���������ʼ�����Ӧ����֤��
    *��jQuery����У�Ҳ�����ʵ��Ĵ���һдԭ֭ԭζ��javascript���롣������֤�û����о���this.value����this.value.length�������ݽ����жϡ�
    *Ȼ����е����ʼ�����֤��ò���õ���������ʽ��
    *Ȼ��ΪinputԪ�����keyup�¼���focus�¼���������keyupʱҲҪ��һ����֤������blur�¼������ˡ���triggerHandler()��������������Ӧ���¼���
    *����ύ��ʱ��ͳһ��֤
    *����������ϸ�ڵĴ���
    */
    //����Ǳ���ģ���Ӻ��Ǳ�ʶ.
    $("form :input.required").each(function(){
        var $required = $("<strong class='high'> *</strong>"); //����Ԫ��
        $(this).parent().append($required); //Ȼ����׷�ӵ��ĵ���
    });
    //�ı���ʧȥ�����   
    $('form :input').blur(function(){
        var $parent = $(this).parent();
        $parent.find(".msg").remove();
        //��֤�û���
        if( $(this).is('#username') ){
            if( this.value=="" || this.value.length < 6 ){
                var errorMsg = '����������6λ���û���.';
                $parent.append('<span class="msg onError">'+errorMsg+'</span>');
            }else{
                var okMsg = '������ȷ.';
                $parent.find(".high").remove();
                $parent.append('<span class="msg onSuccess">'+okMsg+'</span>');
            }
        }
        //��֤�ʼ�
        if( $(this).is('#email') ){
            if( this.value=="" || ( this.value!="" && !/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(this.value) ) ){
                var errorMsg = '��������ȷ��E-Mail��ַ.';
                $parent.append('<span class="msg onError">'+errorMsg+'</span>');
            }else{
                var okMsg = '������ȷ.';
                $parent.find(".high").remove();
                $parent.append('<span class="msg onSuccess">'+okMsg+'</span>');
            }
        }
        if( $(this).is('#password') ){
            if( this.value=="" || this.value.length < 6 ){
                var errorMsg = '����������6λ������.';
                $parent.append('<span class="msg onError">'+errorMsg+'</span>');
            }else{
                var okMsg = '������ȷ.';
                $parent.find(".high").remove();
                $parent.append('<span class="msg onSuccess">'+okMsg+'</span>');
            }
        }
    }).keyup(function(){
        $(this).triggerHandler("blur");
    }).focus(function(){
        $(this).triggerHandler("blur");
    });//end blur


    //�ύ��������֤��
    $('#send').click(function(){
        $("form :input.required").trigger('blur');
        var numError = $('form .onError').length;
        if(numError){
            return false;
        }
        alert("ע��ɹ�,�����ѷ����������,�����.");
    });

    //����
    $('#res').click(function(){
        $(".msg").remove();
    });
})