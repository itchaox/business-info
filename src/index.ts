/*
 * @Version    : v1.00
 * @Author     : Wang Chao
 * @Date       : 2024-08-18 09:52
 * @LastAuthor : Wang Chao
 * @LastTime   : 2025-04-08 15:36
 * @desc       :
 */
// FIXME 单选默认值

// import block_basekit_server_api_1 from '@lark-opdev/block-basekit-server-api';
const block_basekit_server_api_1 = require('@lark-opdev/block-basekit-server-api');

const moment = require('moment');
require('moment-lunar');

const { t } = block_basekit_server_api_1.field;

// 通过addDomainList添加请求接口的域名
// basekit.addDomainList(['api.exchangerate-api.com']);
block_basekit_server_api_1.basekit.addDomainList(['alicloudapi.com', 'shumaidata.com']);

block_basekit_server_api_1.basekit.addField({
  options: {
    // disableAutoUpdate: true, // 关闭自动更新
  },
  // 定义捷径的i18n语言资源
  i18n: {
    messages: {
      'zh-CN': {
        label_data_source: '信息接口提供商',
        label_app_code: 'AppCode',
        label_keyword: '工商信息关键词',
        tooltip_app_code_tooltip: '请按照帮助文档获取 AppCode：',
        tooltip_app_code_link: '帮助文档',
        tooltip_app_code_placeholder: '请将鼠标悬停 AppCode 右侧感叹号，查看帮助文档并粘贴 AppCode 至此',
        option_shumai: '阿里云市场-数脉',
        option_shulian: '阿里云市场-数链',
        result_company_name: '公司名称',
        result_credit_no: '统一社会信用代码',
        result_company_code: '公司代码',
        result_legal_person: '法定代表人',
        result_org_code: '组织机构代码',
        result_company_status: '公司状态',
        result_establish_date: '成立日期',
        result_issue_date: '核准日期',
        result_company_type: '公司类型',
        result_capital: '注册资本',
        result_industry: '行业',
        result_company_address: '公司地址',
        result_business_scope: '经营范围',
        result_operation_startdate: '营业期限开始日期',
        result_operation_enddate: '营业期限结束日期',
        result_authority: '登记机关',
        result_fetch_time: '数据获取时间',
      },
      'en-US': {
        label_data_source: 'Information API Provider',
        label_app_code: 'AppCode',
        label_keyword: 'Business Information Keyword',
        tooltip_app_code_tooltip: 'Please refer to the help document to obtain the AppCode',
        tooltip_app_code_placeholder:
          'Please hover the mouse over the exclamation mark on the right side of AppCode, view the help document and paste AppCode here',
        tooltip_app_code_link: 'Help Documentation',
        option_shumai: 'Alibaba Cloud Market - Shumai',
        option_shulian: 'Alibaba Cloud Market - Shulian',
        result_company_name: 'Company Name',
        result_credit_no: 'Unified Social Credit Code',
        result_company_code: 'Company Code',
        result_legal_person: 'Legal Representative',
        result_org_code: 'Organization Code',
        result_company_status: 'Company Status',
        result_establish_date: 'Establishment Date',
        result_issue_date: 'Approval Date',
        result_company_type: 'Company Type',
        result_capital: 'Registered Capital',
        result_industry: 'Industry',
        result_company_address: 'Company Address',
        result_business_scope: 'Business Scope',
        result_operation_startdate: 'Business Term Start Date',
        result_operation_enddate: 'Business Term End Date',
        result_authority: 'Registration Authority',
        result_fetch_time: 'Data Retrieval Time',
      },
      'ja-JP': {
        label_data_source: '情報インターフェースプロバイダー',
        label_app_code: 'AppCode',
        label_keyword: '企業情報キーワード',
        tooltip_app_code_tooltip: 'AppCodeを取得するにはヘルプドキュメントを参照してください',
        tooltip_app_code_placeholder:
          'AppCodeの右側にある感嘆符の上にマウスを移動し、ヘルプドキュメントを表示して、ここにAppCodeを貼り付けてください。',
        tooltip_app_code_link: 'ヘルプドキュメント',
        option_shumai: 'アリババクラウド市場 - 数脈',
        option_shulian: 'アリババクラウド市場 - 数链',
        result_company_name: '会社名',
        result_credit_no: '統一社会信用コード',
        result_company_code: '会社コード',
        result_legal_person: '法定代表者',
        result_org_code: '組織コード',
        result_company_status: '会社の状態',
        result_establish_date: '設立日',
        result_issue_date: '承認日',
        result_company_type: '会社の種類',
        result_capital: '登録資本金',
        result_industry: '業界',
        result_company_address: '会社住所',
        result_business_scope: '事業範囲',
        result_operation_startdate: '営業期間開始日',
        result_operation_enddate: '営業期間終了日',
        result_authority: '登録機関',
        result_fetch_time: 'データ取得時間',
      },
    },
  },
  // 定义捷径的入参
  formItems: [
    {
      key: 'appCode',
      label: t('label_app_code'),
      component: block_basekit_server_api_1.FieldComponent.Input,
      // @ts-ignore
      tooltips: [
        {
          type: 'text',
          content: t('tooltip_app_code_tooltip'),
        },
        {
          type: 'link',
          text: t('tooltip_app_code_link'),
          link: 'https://bcmcjimpjd.feishu.cn/wiki/PSrcwVRuEi2d6ukHWemcgd3fn2g',
        },
      ],
      props: {
        placeholder: t('tooltip_app_code_placeholder'),
      },
      validator: {
        required: true,
      },
    },
    {
      key: 'keyword',
      label: t('label_keyword'),
      component: block_basekit_server_api_1.FieldComponent.FieldSelect,
      props: {
        supportType: [block_basekit_server_api_1.FieldType.Text],
      },
      validator: {
        required: true,
      },
    },
  ],
  // 定义捷径的返回结果类型
  resultType: {
    type: block_basekit_server_api_1.FieldType.Object,
    extra: {
      icon: {
        light:
          'https://lf3-static.bytednsdoc.com/obj/eden-cn/uvpzulael_lzhi/ljhwZthlaukjlkulzlp/2024Q2/CorporateInformationExtraction.svg',
        dark: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/uvpzulael_lzhi/ljhwZthlaukjlkulzlp/2024Q2/CorporateInformationExtraction.svg',
      },
      properties: [
        {
          key: 'id',
          isGroupByKey: true,
          type: block_basekit_server_api_1.FieldType.Text,
          title: 'id',
          hidden: true,
        },
        {
          key: 'companyName',
          type: block_basekit_server_api_1.FieldType.Text,
          title: t('result_company_name'),
          primary: true,
        },
        {
          key: 'creditNo',
          type: block_basekit_server_api_1.FieldType.Text,
          title: t('result_credit_no'),
        },
        {
          key: 'companyCode',
          type: block_basekit_server_api_1.FieldType.Number,
          title: t('result_company_code'),
          extra: {
            formatter: block_basekit_server_api_1.NumberFormatter.INTEGER,
          },
        },
        {
          key: 'legalPerson',
          type: block_basekit_server_api_1.FieldType.Text,
          title: t('result_legal_person'),
        },
        {
          key: 'orgCode',
          type: block_basekit_server_api_1.FieldType.Text,
          title: t('result_org_code'),
        },
        {
          key: 'companyStatus',
          type: block_basekit_server_api_1.FieldType.Text,
          title: t('result_company_status'),
        },
        {
          key: 'establishDate',
          type: block_basekit_server_api_1.FieldType.DateTime,
          title: t('result_establish_date'),
          extra: {
            dateFormat: block_basekit_server_api_1.DateFormatter.DATE_YMD_WITH_HYPHEN,
          },
        },
        {
          key: 'issueDate',
          type: block_basekit_server_api_1.FieldType.DateTime,
          title: t('result_issue_date'),
          extra: {
            dateFormat: block_basekit_server_api_1.DateFormatter.DATE_YMD_WITH_HYPHEN,
          },
        },
        {
          key: 'companyType',
          type: block_basekit_server_api_1.FieldType.Text,
          title: t('result_company_type'),
        },
        {
          key: 'capital',
          type: block_basekit_server_api_1.FieldType.Number,
          title: t('result_capital'),
          extra: {
            formatter: block_basekit_server_api_1.NumberFormatter.INTEGER,
          },
        },
        {
          key: 'industry',
          type: block_basekit_server_api_1.FieldType.Text,
          title: t('result_industry'),
        },
        {
          key: 'companyAddress',
          type: block_basekit_server_api_1.FieldType.Text,
          title: t('result_company_address'),
        },
        {
          key: 'businessScope',
          type: block_basekit_server_api_1.FieldType.Text,
          title: t('result_business_scope'),
        },
        {
          key: 'operationStartdate',
          type: block_basekit_server_api_1.FieldType.DateTime,
          title: t('result_operation_startdate'),
          extra: {
            dateFormat: block_basekit_server_api_1.DateFormatter.DATE_YMD_WITH_HYPHEN,
          },
        },
        {
          key: 'operationEnddate',
          type: block_basekit_server_api_1.FieldType.DateTime,
          title: t('result_operation_enddate'),
          extra: {
            dateFormat: block_basekit_server_api_1.DateFormatter.DATE_YMD_WITH_HYPHEN,
          },
        },
        {
          key: 'authority',
          type: block_basekit_server_api_1.FieldType.Text,
          title: t('result_authority'),
        },
        {
          key: 'fetchTime',
          type: block_basekit_server_api_1.FieldType.DateTime,
          title: t('result_fetch_time'),
          extra: {
            dateFormat: block_basekit_server_api_1.DateFormatter.DATE_TIME_WITH_HYPHEN,
          },
        },
      ],
    },
  },
  execute: async (formItemParams, context) => {
    const { dataSource, appCode, keyword } = formItemParams;
    const { fetch } = context;
    let baseUrl = 'https://slycompany.market.alicloudapi.com/business2/get';

    // @ts-ignore
    let params = new URLSearchParams({
      keyword: keyword[0].text,
    });
    let headers = {
      Authorization: `APPCODE ${appCode}`,
      'Content-Type': 'application/json; charset=UTF-8',
    };
    let url = baseUrl + '?' + params.toString();
    const query = await fetch(url, {
      method: 'GET',
      headers: headers,
    });
    if (!query.ok) {
      // @ts-ignore
      console.log('Query Error:', JSON.stringify(query));
      return { code: block_basekit_server_api_1.FieldCode.Error, msg: `Query Error: ${query.status}` };
    }
    const response = await query.json();
    // @ts-ignore
    console.log('Response Success:', JSON.stringify(response));
    return {
      code: block_basekit_server_api_1.FieldCode.Success,
      data: {
        id: `${Math.random()}`,
        companyName: response.data.data.companyName,
        creditNo: response.data.data.creditNo,
        companyCode: response.data.data.companyCode ? Number(response.data.data.companyCode) : undefined,
        legalPerson: response.data.data.legalPerson,
        orgCode: response.data.data.orgCode,
        companyStatus: response.data.data.companyStatus,
        establishDate: response.data.data.establishDate
          ? new Date(response.data.data.establishDate.split(' ')[0]).getTime()
          : undefined,
        issueDate: response.data.data.issueDate
          ? new Date(response.data.data.issueDate.split(' ')[0]).getTime()
          : undefined,
        companyType: response.data.data.companyType,
        capital: response.data.data.capital
          ? response.data.data.capital.includes('万人民币')
            ? Number((Number.parseFloat(response.data.data.capital.replace('万人民币', '')) * 10000).toFixed(6))
            : Number(response.data.data.capital)
          : undefined,
        industry: response.data.data.industry,
        companyAddress: response.data.data.companyAddress,
        businessScope: response.data.data.businessScope,
        operationStartdate: response.data.data.operationStartdate
          ? new Date(response.data.data.operationStartdate.split(' ')[0]).getTime()
          : undefined,
        operationEnddate: response.data.data.operationEnddate
          ? new Date(response.data.data.operationEnddate.split(' ')[0]).getTime()
          : undefined,
        authority: response.data.data.authority,
        fetchTime: Date.now(),
      },
    };
  },
});
export default block_basekit_server_api_1.basekit;
