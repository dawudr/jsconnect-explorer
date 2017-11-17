import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-pipeline',
  templateUrl: './create-pipeline.component.html',
  styleUrls: ['./create-pipeline.component.scss']
})
export class CreatePipelineComponent implements OnInit {

  constructor() { }

  selectedsource = "";
  selectedtype = "";
  sources = [
    "SFTPDirSource",
    "S3Source",
    "KafkaSource",
    "JmsSource",
    "JsonRestSource",
    "LocalDirSource"
  ];

  sinks = [
    "DebugSink",
    "KafkaSink",
    "LocalDirSink",
    "MemoryBufferSink",
    "MemoryFileSink",
    "S3BucketSink",
    "StdOutSink"
  ];

  reader = [
    "CsvDecoder",
    "ExcelTransform",
    "FixedSchemaDecoder",
    "GzipDecoder",
    "InputStreamEncoder",
    "JsonDesensitiserTransform",
    "JsonDetokeniserTransform",
    "JsonElementsMapper",
    "R10GeneraliseTransform",
    "Sl8GeneraliseTransform",
    "SchemalessCsvDecoder",
    "SqsMessageTransform",
    "TextFileTransform",
    "XmlDecoder",
    "XmlRecordTransform",
    "ZipArchiveTransform"
  ];

  transformer = [
    "DesensitiserTransform",
    "DetokeniserTransform",
    "FixedSchemaEncoder",
    "InputStreamEncoder"
  ];

  writer = [
    "CsvEncoder",
    "GzipEncoder",
    "InputStreamDecoder",
    "JsonEncoder",
    "SchemalessCsvEncoder",
    "XmlDecoder",
    "XmlRecordTransform"
  ];

  ngOnInit() {
    this.selectedsource = "";
//    this.selectedtype = "";
  }

  step2: any = {
    showNext: true,
    showPrev: true
  };

  step3: any = {
    showSecret: false
  };

  data: any = {
    adapter : {
      "pipelineId" : 'transaction-r10-updates',
      "metrics.enabled" : true,
      checkpoints : {
        enabled : true,
        storage : {
          class : "com.sainsburys.connect.api.storage.CheckpointStorageKafka",
        },
        "checkpoints.rewind" : false,
      },
      "committer.interval": "5 minutes",
      "committer.max.idle.count" : "",
      "error.handler.class" : "com.sainsburys.connect.api.errors.MalformedDataHandlerKafka",
      desensitise : {
        strategies : {
          COT_C_AccountNumber : "sha256",
          COT_C_CV_AccountNumber : "sha256",
          COT_LI_OS_A_ProviderData : "sha256",
          COT_LI_OS_CardNumber : "sha256",
          COT_LI_T_A_ProviderData : "sha256",
          COT_LI_T_CCD_MaskedAccountId : "sha256",
          RT_C_AccountNumber : "sha256",
          RT_C_CV_AccountNumber : "sha256",
          RT_C_CustomerID : "sha256",
          RT_C_CustomerExternalId : "sha256",
          RT_C_ScanData : "sha256",
          RT_LI_LR_LoyaltyID : "sha256",
          RT_LI_OS_A_ProviderData : "sha256",
          RT_LI_OS_CardNumber : "sha256",
          RT_LI_T_A_ProviderData : "sha256",
          RT_LI_T_CCD_MaskedAccountId : "sha256",
          RT_LI_T_GC_CardNumber : "sha256",
          COT_C_CD_AccountNumber : "sha256",
          COT_C_CustomerExternalId : "sha256",
          COT_C_R_CustomerExternalId : "sha256",
          COT_C_CustomerID : "sha256",
          COT_C_R_AccountNumber : "sha256",
          COT_C_V_LicensePlateID : "sha256",
          COT_LI_T_A_MerchantNumber : "sha256",
          RT_C_CD_AccountNumber : "sha256",
          RT_C_PrimaryAccountNumber : "sha256",
          RT_C_R_CustomerExternalId : "sha256",
          RT_C_R_ScanData : "sha256",
          RT_LI_OS_A_ReferenceNumber : "sha256",
          RT_LI_T_CCD_FI_LicensePlateID : "sha256",
          RT_LI_ScanData : "sha256",
          COT_C_R_ScanData : "sha256",
        }
      },
      "repeat.interval" : "1 hour",
      "repeat.count" : "1"
    },
    pipeline : {
      type: "JmsSource",
      source : {},
      sink : {}
    }
  };

  filteredsourcesmock = [];
  sourcesmock = [
    {
      name : "SFTP",
      type : "SFTPDirSource",
      path : "",
      host : "",
      port : "",
      user : "",
      pass : "",
      keyfile : "",
      fileNameRegex : "csv",
      deleteOnCommit : ""
    },
    {
      name : "S3",
      type : "S3Source",
      s3Endpoint : "",
      s3ProfileName : "",
      s3ProfileFile : "",
      s3BucketName : "",
      s3FilterRegex : ".*VW_B_LU_EAN_M.*|.*VW_B_LU_BRAND_M.*|.*VW_B_LU_SKU_M.*",
      s3FilterRegexInclude : true,
      s3Prefix : "",
      deleteOnCommit : true,
      security : {
        aws : {
         profile : "",
         accessKeyId : "",
         secretKey : ""
        }
      }
    },
    {
      name : "Kafka",
      type : "KafkaSource",
      consumer : "",
      "consumer.auto.offset.reset" : "latest",
      topic : "",
      "poll.interval" : "250 milliseconds"
    },
    {
      name : "JMS",
      type : "JmsSource",
      queue : "",
      topic : "",
      "client.id" : "",
      initialContextFactory : "",
      providerUrl : "",
      factoryLookupName : "",
      "max.unacknowledged" : 100
    },
    {
      name : "Local File System",
      type : "LocalDirSource",
      dir : "/tmp/test-a",
      regex : "*",
      deleteOnCommit : true
    },
    {
      name : "Json REST",
      type : "JsonRestSource",
      masterUri : "",
      masterResultsPath : "",
      detailUriPattern : "",
      itemPk : "",
      itemTimestampKey : "",
      timestampFormat : "",
      globalParams : 'api_client_id="",fields=""'
    }
  ];



  sinksmock = [
    {
      name : "Kafka",
      type : "KafkaSink",
      topic : "",
      producer: ""
    },
    {
      name : "Local File System",
      type : "LocalDirSink",
      outputDir : "/tmp/piano_id/output",
      output : {
        "buffer.size" : 1048576,
        "file" : {
          "size.hint" : 5242880,
          "format.lines" : true,
          rename : '["\\.xml", ".csv"]'
        }
      }
    },
    {
      name : "S3",
      type : "S3BucketSink",
      s3BucketName : "",
      s3Prefix : "",
      s3ProfileName : "",
      s3ProfileFile : "",
      s3Endpoint : "",
      output : {
        "buffer.size" : 10485760,
        file : {
          fullpath : true,
          "file.rename" : '["$", ".csv"]',
          "size.hint" : 104857600,
          "name.datePrefix" : "yyyy-MM-dd/"
        }
      },
      security : {
        aws : {
         profile : "",
         accessKeyId : "",
         secretKey : ""
        }
      }
    }
  ];


  isCompleted: boolean = false;

  onStep1Next(event) {
    console.log('Step1 - Next');
  }

  onStep2Next(event) {
    console.log('Step2 - Next');
  }

  onStep3Next(event) {
    console.log('Step3 - Next');
  }

  onComplete(event) {
    this.isCompleted = true;
  }

  onStepChanged(step) {
    console.log('Changed to ' + step.title);
  }


  onInput($event) {
    console.log('selected: ' + $event.target.value);
  }

  onChange(newValue) {
    console.log("onChange=" + newValue);
    this.selectedtype = newValue;
  }


//  filterSource(source, selectedsource) {
//    return source.type == selectedsource
//  }

}
