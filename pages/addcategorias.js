import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  
Md3DRotation
,MdAccessibility
,MdAccessible
,MdAccountBalance
,MdAccountBalanceWallet
,MdAccountBox
,MdAccountCircle
,MdAddShoppingCart
,MdAlarm
,MdAlarmAdd
,MdAlarmOff
,MdAlarmOn
,MdAllOut
,MdAndroid
,MdAnnouncement
,MdAspectRatio
,MdAssessment
,MdAssignment
,MdAssignmentInd
,MdAssignmentLate
,MdAssignmentReturn
,MdAssignmentReturned
,MdAssignmentTurnedIn
,MdAutorenew
,MdBackup
,MdBook
,MdBookmark
,MdBookmarkBorder
,MdBugReport
,MdBuild
,MdCached
,MdCameraEnhance
,MdCardGiftcard
,MdCardMembership
,MdCardTravel
,MdChangeHistory
,MdCheckCircle
,MdChromeReaderMode
,MdClass
,MdCode
,MdCompareArrows
,MdCopyright
,MdCreditCard
,MdDashboard
,MdDateRange
,MdDelete
,MdDeleteForever
,MdDescription
,MdDns
,MdDone
,MdDoneAll
,MdDonutLarge
,MdDonutSmall
,MdEject
,MdEuroSymbol
,MdEvent
,MdEventSeat
,MdExitToApp
,MdExplore
,MdExtension
,MdFace
,MdFavorite
,MdFavoriteBorder
,MdFeedback
,MdFindInPage
,MdFindReplace
,MdFingerprint
,MdFlightLand
,MdFlightTakeoff
,MdFlipToBack
,MdFlipToFront
,MdGTranslate
,MdGavel
,MdGetApp
,MdGif
,MdGrade
,MdGroupWork
,MdHelp
,MdHelpOutline
,MdHighlightOff
,MdHistory
,MdHome
,MdHourglassEmpty
,MdHourglassFull
,MdHttp
,MdHttps
,MdImportantDevices
,MdInfo
,MdInfoOutline
,MdInput
,MdInvertColors
,MdLabel
,MdLabelOutline
,MdLanguage
,MdLaunch
,MdLightbulbOutline
,MdLineStyle
,MdLineWeight
,MdList
,MdLock
,MdLockOpen
,MdLockOutline
,MdLoyalty
,MdMarkunreadMailbox
,MdMotorcycle
,MdNoteAdd
,MdOfflinePin
,MdOpacity
,MdOpenInBrowser
,MdOpenInNew
,MdOpenWith
,MdPageview
,MdPanTool
,MdPayment
,MdPermCameraMic
,MdPermContactCalendar,MdPermDataSetting
,MdPermDeviceInformation
,MdPermIdentity
,MdPermMedia
,MdPermPhoneMsg
,MdPermScanWifi
,MdPets
,MdPictureInPicture
,MdPictureInPictureAlt
,MdPlayForWork
,MdPolymer
,MdPowerSettingsNew
,MdPregnantWoman
,MdPrint
,MdQueryBuilder
,MdQuestionAnswer
,MdReceipt
,MdRecordVoiceOver
,MdRedeem
,MdRemoveShoppingCart
,MdReorder
,MdReportProblem
,MdRestore
,MdRestorePage
,MdRoom
,MdRoundedCorner
,MdRowing
,MdSchedule
,MdSearch
,MdSettings
,MdSettingsApplications
,MdSettingsBackupRestore
,MdSettingsBluetooth
,MdSettingsBrightness
,MdSettingsCell
,MdSettingsEthernet
,MdSettingsInputAntenna
,MdSettingsInputComponent
,MdSettingsInputComposite
,MdSettingsInputHdmi
,MdSettingsInputSvideo
,MdSettingsOverscan
,MdSettingsPhone
,MdSettingsPower
,MdSettingsRemote
,MdSettingsVoice
,MdShop
,MdShopTwo
,MdShoppingBasket
,MdShoppingCart
,MdSpeakerNotes
,MdSpeakerNotesOff
,MdSpellcheck
,MdStars
,MdStore
,MdSubject
,MdSupervisorAccount
,MdSwapHoriz
,MdSwapVert
,MdSwapVerticalCircle
,MdSystemUpdateAlt
,MdTab
,MdTabUnselected
,MdTheaters
,MdThumbDown
,MdThumbUp
,MdThumbsUpDown
,MdTimeline
,MdToc
,MdToday
,MdToll
,MdTouchApp
,MdTrackChanges
,MdTranslate
,MdTrendingDown
,MdTrendingFlat
,MdTrendingUp
,MdTurnedIn
,MdTurnedInNot
,MdUpdate
,MdVerifiedUser
,MdViewAgenda
,MdViewArray
,MdViewCarousel
,MdViewColumn
,MdViewDay
,MdViewHeadline
,MdViewList
,MdViewModule
,MdViewQuilt
,MdViewStream
,MdViewWeek
,MdVisibility
,MdVisibilityOff
,MdWatchLater
,MdWork
,MdYoutubeSearchedFor
,MdZoomIn
,MdZoomOut
,MdAddAlert
,MdError
,MdErrorOutline
,MdWarning
,MdAddToQueue
,MdAirplay
,MdAlbum
,MdArtTrack
,MdAvTimer
,MdBrandingWatermark
,MdCallToAction
,MdClosedCaption
,MdEqualizer
,MdExplicit
,MdFastForward
,MdFastRewind
,MdFeaturedPlayList
,MdFeaturedVideo
,MdFiberDvr
,MdFiberManualRecord
,MdFiberNew
,MdFiberPin
,MdFiberSmartRecord
,MdForward10
,MdForward30
,MdForward5
,MdGames
,MdHd
,MdHearing
,MdHighQuality
,MdLibraryAdd
,MdLibraryBooks
,MdLibraryMusic
,MdLoop
,MdMic
,MdMicNone
,MdMicOff
,MdMovie
,MdMusicVideo
,MdNewReleases
,MdNotInterested
,MdNote
,MdPause
,MdPauseCircleFilled
,MdPauseCircleOutline
,MdPlayArrow
,MdPlayCircleFilled
,MdPlayCircleOutline
,MdPlaylistAdd
,MdPlaylistAddCheck
,MdPlaylistPlay
,MdQueue
,MdQueueMusic
,MdQueuePlayNext
,MdRadio
,MdRecentActors
,MdRemoveFromQueue
,MdRepeat
,MdRepeatOne
,MdReplay10
,MdReplay
,MdReplay30
,MdReplay5
,MdShuffle
,MdSkipNext
,MdSkipPrevious
,MdSlowMotionVideo
,MdSnooze
,MdSortByAlpha
,MdStop
,MdSubscriptions
,MdSubtitles
,MdSurroundSound
,MdVideoCall
,MdVideoLabel
,MdVideoLibrary
,MdVideocam
,MdVideocamOff
,MdVolumeDown
,MdVolumeMute
,MdVolumeOff
,MdVolumeUp
,MdWeb
,MdWebAsset
,MdBusiness
,MdCall
,MdCallEnd
,MdCallMade
,MdCallMerge
,MdCallMissed
,MdCallMissedOutgoing
,MdCallReceived
,MdCallSplit
,MdChat
,MdChatBubble
,MdChatBubbleOutline
,MdClearAll
,MdComment
,MdContactMail
,MdContactPhone
,MdContacts
,MdDialerSip
,MdDialpad
,MdEmail
,MdForum
,MdImportContacts
,MdImportExport
,MdInvertColorsOff
,MdLiveHelp
,MdLocationOff
,MdLocationOn
,MdMailOutline
,MdMessage
,MdNoSim
,MdPhone
,MdPhonelinkErase
,MdPhonelinkLock
,MdPhonelinkRing
,MdPhonelinkSetup
,MdPortableWifiOff
,MdPresentToAll
,MdRingVolume
,MdRssFeed
,MdScreenShare
,MdSpeakerPhone
,MdStayCurrentLandscape
,MdStayCurrentPortrait
,MdStayPrimaryLandscape
,MdStayPrimaryPortrait
,MdStopScreenShare
,MdSwapCalls
,MdTextsms
,MdVoicemail
,MdVpnKey
,MdAdd
,MdAddBox
,MdAddCircle
,MdAddCircleOutline
,MdArchive
,MdBackspace
,MdBlock
,MdClear
,MdContentCopy
,MdContentCut
,MdContentPaste
,MdCreate
,MdDeleteSweep
,MdDrafts
,MdFilterList
,MdFlag
,MdFontDownload
,MdForward
,MdGesture
,MdInbox
,MdLink
,MdLowPriority
,MdMail
,MdMarkunread
,MdMoveToInbox
,MdNextWeek
,MdRedo
,MdRemove
,MdRemoveCircle
,MdRemoveCircleOutline
,MdReply
,MdReplyAll
,MdReport
,MdSave
,MdSelectAll
,MdSend
,MdSort
,MdTextFormat
,MdUnarchive
,MdUndo
,MdWeekend
,MdAccessAlarm
,MdAccessAlarms
,MdAccessTime
,MdAddAlarm
,MdAirplanemodeActive
,MdAirplanemodeInactive
,MdBattery20
,MdBattery30
,MdBattery50
,MdBattery60
,MdBattery80
,MdBattery90
,MdBatteryAlert
,MdBatteryCharging20
,MdBatteryCharging30
,MdBatteryCharging50
,MdBatteryCharging60
,MdBatteryCharging80
,MdBatteryCharging90
,MdBatteryChargingFull
,MdBatteryFull
,MdBatteryStd
,MdBatteryUnknown
,MdBluetooth
,MdBluetoothConnected
,MdBluetoothDisabled
,MdBluetoothSearching
,MdBrightnessAuto
,MdBrightnessHigh
,MdBrightnessLow
,MdBrightnessMedium
,MdDataUsage
,MdDeveloperMode
,MdDevices
,MdDvr
,MdGpsFixed
,MdGpsNotFixed
,MdGpsOff
,MdGraphicEq
,MdLocationDisabled
,MdLocationSearching
,MdNetworkCell
,MdNetworkWifi
,MdNfc
,MdScreenLockLandscape
,MdScreenLockPortrait
,MdScreenLockRotation
,MdScreenRotation
,MdSdStorage
,MdSettingsSystemDaydream
,MdSignalCellular0Bar
,MdSignalCellular1Bar
,MdSignalCellular2Bar
,MdSignalCellular3Bar
,MdSignalCellular4Bar
,MdSignalCellularConnectedNoInternet0Bar
,MdSignalCellularConnectedNoInternet1Bar
,MdSignalCellularConnectedNoInternet2Bar
,MdSignalCellularConnectedNoInternet3Bar
,MdSignalCellularConnectedNoInternet4Bar
,MdSignalCellularNoSim
,MdSignalCellularNull
,MdSignalCellularOff
,MdSignalWifi0Bar
,MdSignalWifi1Bar
,MdSignalWifi1BarLock
,MdSignalWifi2Bar
,MdSignalWifi2BarLock
,MdSignalWifi3Bar
,MdSignalWifi3BarLock
,MdSignalWifi4Bar
,MdSignalWifi4BarLock
,MdSignalWifiOff
,MdStorage
,MdUsb
,MdWallpaper
,MdWidgets
,MdWifiLock
,MdWifiTethering
,MdAttachFile
,MdAttachMoney
,MdBorderAll
,MdBorderBottom
,MdBorderClear
,MdBorderColor
,MdBorderHorizontal
,MdBorderInner
,MdBorderLeft
,MdBorderOuter
,MdBorderRight
,MdBorderStyle
,MdBorderTop
,MdBorderVertical
,MdBubbleChart
,MdDragHandle
,MdFormatAlignCenter
,MdFormatAlignJustify
,MdFormatAlignLeft
,MdFormatAlignRight
,MdFormatBold
,MdFormatClear
,MdFormatColorFill
,MdFormatColorReset
,MdFormatColorText
,MdFormatIndentDecrease
,MdFormatIndentIncrease
,MdFormatItalic
,MdFormatLineSpacing
,MdFormatListBulleted
,MdFormatListNumbered
,MdFormatPaint
,MdFormatQuote
,MdFormatShapes
,MdFormatSize
,MdFormatStrikethrough
,MdFormatTextdirectionLToR
,MdFormatTextdirectionRToL
,MdFormatUnderlined
,MdFunctions
,MdHighlight
,MdInsertChart
,MdInsertComment
,MdInsertDriveFile
,MdInsertEmoticon
,MdInsertInvitation
,MdInsertLink
,MdInsertPhoto
,MdLinearScale
,MdMergeType
,MdModeComment
,MdModeEdit
,MdMonetizationOn
,MdMoneyOff
,MdMultilineChart
,MdPieChart
,MdPieChartOutlined
,MdPublish
,MdShortText
,MdShowChart
,MdSpaceBar
,MdStrikethroughS
,MdTextFields
,MdTitle
,MdVerticalAlignBottom
,MdVerticalAlignCenter
,MdVerticalAlignTop
,MdWrapText
,MdAttachment
,MdCloud
,MdCloudCircle
,MdCloudDone
,MdCloudDownload
,MdCloudOff
,MdCloudQueue
,MdCloudUpload
,MdCreateNewFolder
,MdFileDownload
,MdFileUpload
,MdFolder
,MdFolderOpen
,MdFolderShared
,MdCast
,MdCastConnected
,MdComputer
,MdDesktopMac
,MdDesktopWindows
,MdDeveloperBoard
,MdDeviceHub
,MdDevicesOther
,MdDock
,MdGamepad
,MdHeadset
,MdHeadsetMic
,MdKeyboard
,MdKeyboardArrowDown
,MdKeyboardArrowLeft
,MdKeyboardArrowRight
,MdKeyboardArrowUp
,MdKeyboardBackspace
,MdKeyboardCapslock
,MdKeyboardHide
,MdKeyboardReturn
,MdKeyboardTab
,MdKeyboardVoice
,MdLaptop
,MdLaptopChromebook
,MdLaptopMac
,MdLaptopWindows
,MdMemory
,MdMouse
,MdPhoneAndroid
,MdPhoneIphone
,MdPhonelink
,MdPhonelinkOff
,MdPowerInput
,MdRouter
,MdScanner
,MdSecurity
,MdSimCard
,MdSmartphone
,MdSpeaker
,MdSpeakerGroup
,MdTablet
,MdTabletAndroid
,MdTabletMac
,MdToys
,MdTv
,MdVideogameAsset
,MdWatch
,MdAddAPhoto
,MdAddToPhotos
,MdAdjust
,MdAssistant
,MdAssistantPhoto
,MdAudiotrack
,MdBlurCircular
,MdBlurLinear
,MdBlurOff
,MdBlurOn
,MdBrightness1
,MdBrightness2
,MdBrightness3
,MdBrightness4
,MdBrightness5
,MdBrightness6
,MdBrightness7
,MdBrokenImage
,MdBrush
,MdBurstMode
,MdCamera
,MdCameraAlt
,MdCameraFront
,MdCameraRear
,MdCameraRoll
,MdCenterFocusStrong
,MdCenterFocusWeak
,MdCollections
,MdCollectionsBookmark
,MdColorLens
,MdColorize
,MdCompare
,MdControlPoint
,MdControlPointDuplicate
,MdCrop169
,MdCrop
,MdCrop32
,MdCrop54
,MdCrop75
,MdCropDin
,MdCropFree
,MdCropLandscape
,MdCropOriginal
,MdCropPortrait
,MdCropRotate
,MdCropSquare
,MdDehaze
,MdDetails
,MdEdit
,MdExposure
,MdExposureNeg1
,MdExposureNeg2
,MdExposurePlus1
,MdExposurePlus2
,MdExposureZero
,MdFilter1
,MdFilter2
,MdFilter
,MdFilter3
,MdFilter4
,MdFilter5
,MdFilter6
,MdFilter7
,MdFilter8
,MdFilter9
,MdFilter9Plus
,MdFilterBAndW
,MdFilterCenterFocus
,MdFilterDrama
,MdFilterFrames
,MdFilterHdr
,MdFilterNone
,MdFilterTiltShift
,MdFilterVintage
,MdFlare
,MdFlashAuto
,MdFlashOff
,MdFlashOn
,MdFlip
,MdGradient
,MdGrain
,MdGridOff
,MdGridOn
,MdHdrOff
,MdHdrOn
,MdHdrStrong
,MdHdrWeak
,MdHealing
,MdImage
,MdImageAspectRatio
,MdIso
,MdLandscape
,MdLeakAdd
,MdLeakRemove
,MdLens
,MdLinkedCamera
,MdLooks
,MdLooks3
,MdLooks4
,MdLooks5
,MdLooks6
,MdLooksOne
,MdLooksTwo
,MdLoupe
,MdMonochromePhotos
,MdMovieCreation
,MdMovieFilter
,MdMusicNote
,MdNature
,MdNaturePeople
,MdNavigateBefore
,MdNavigateNext
,MdPalette
,MdPanorama
,MdPanoramaFishEye
,MdPanoramaHorizontal
,MdPanoramaVertical
,MdPanoramaWideAngle
,MdPhoto
,MdPhotoAlbum
,MdPhotoCamera
,MdPhotoFilter
,MdPhotoLibrary
,MdPhotoSizeSelectActual
,MdPhotoSizeSelectLarge
,MdPhotoSizeSelectSmall
,MdPictureAsPdf
,MdPortrait
,MdRemoveRedEye
,MdRotate90DegreesCcw
,MdRotateLeft
,MdRotateRight
,MdSlideshow
,MdStraighten
,MdStyle
,MdSwitchCamera
,MdSwitchVideo
,MdTagFaces
,MdTexture
,MdTimelapse
,MdTimer10
,MdTimer
,MdTimer3
,MdTimerOff
,MdTonality
,MdTransform
,MdTune
,MdViewComfy
,MdViewCompact
,MdVignette
,MdWbAuto
,MdWbCloudy
,MdWbIncandescent
,MdWbIridescent
,MdWbSunny
,MdAddLocation
,MdBeenhere
,MdDirections
,MdDirectionsBike
,MdDirectionsBoat
,MdDirectionsBus
,MdDirectionsCar
,MdDirectionsRailway
,MdDirectionsRun
,MdDirectionsSubway
,MdDirectionsTransit
,MdDirectionsWalk
,MdEditLocation
,MdEvStation
,MdFlight
,MdHotel
,MdLayers
,MdLayersClear
,MdLocalActivity
,MdLocalAirport
,MdLocalAtm
,MdLocalBar
,MdLocalCafe
,MdLocalCarWash
,MdLocalConvenienceStore
,MdLocalDining
,MdLocalDrink
,MdLocalFlorist
,MdLocalGasStation
,MdLocalGroceryStore
,MdLocalHospital
,MdLocalHotel
,MdLocalLaundryService
,MdLocalLibrary
,MdLocalMall
,MdLocalMovies
,MdLocalOffer
,MdLocalParking
,MdLocalPharmacy
,MdLocalPhone
,MdLocalPizza
,MdLocalPlay
,MdLocalPostOffice
,MdLocalPrintshop
,MdLocalSee
,MdLocalShipping
,MdLocalTaxi
,MdMap
,MdMyLocation
,MdNavigation
,MdNearMe
,MdPersonPin
,MdPersonPinCircle
,MdPinDrop
,MdPlace
,MdRateReview
,MdRestaurant
,MdRestaurantMenu
,MdSatellite
,MdStoreMallDirectory
,MdStreetview
,MdSubway
,MdTerrain
,MdTraffic
,MdTrain
,MdTram
,MdTransferWithinAStation
,MdZoomOutMap
,MdApps
,MdArrowBack
,MdArrowDownward
,MdArrowDropDown
,MdArrowDropDownCircle
,MdArrowDropUp
,MdArrowForward
,MdArrowUpward
,MdCancel
,MdCheck
,MdChevronLeft
,MdChevronRight
,MdClose
,MdExpandLess
,MdExpandMore
,MdFirstPage
,MdFullscreen
,MdFullscreenExit
,MdLastPage
,MdMenu
,MdMoreHoriz
,MdMoreVert
,MdRefresh
,MdSubdirectoryArrowLeft
,MdSubdirectoryArrowRight
,MdUnfoldLess
,MdUnfoldMore
,MdAdb
,MdAirlineSeatFlat
,MdAirlineSeatFlatAngled
,MdAirlineSeatIndividualSuite
,MdAirlineSeatLegroomExtra
,MdAirlineSeatLegroomNormal
,MdAirlineSeatLegroomReduced
,MdAirlineSeatReclineExtra
,MdAirlineSeatReclineNormal
,MdBluetoothAudio
,MdConfirmationNumber
,MdDiscFull
,MdDoNotDisturb
,MdDoNotDisturbAlt
,MdDoNotDisturbOff
,MdDoNotDisturbOn
,MdDriveEta
,MdEnhancedEncryption
,MdEventAvailable
,MdEventBusy
,MdEventNote
,MdFolderSpecial
,MdLiveTv
,MdMms
,MdMore
,MdNetworkCheck
,MdNetworkLocked
,MdNoEncryption
,MdOndemandVideo
,MdPersonalVideo
,MdPhoneBluetoothSpeaker
,MdPhoneForwarded
,MdPhoneInTalk
,MdPhoneLocked
,MdPhoneMissed
,MdPhonePaused
,MdPower
,MdPriorityHigh
,MdRvHookup
,MdSdCard
,MdSimCardAlert
,MdSms
,MdSmsFailed
,MdSync
,MdSyncDisabled
,MdSyncProblem
,MdSystemUpdate
,MdTapAndPlay
,MdTimeToLeave
,MdVibration
,MdVoiceChat
,MdVpnLock
,MdWc
,MdWifi
,MdAcUnit
,MdAirportShuttle
,MdAllInclusive
,MdBeachAccess
,MdBusinessCenter
,MdCasino
,MdChildCare
,MdChildFriendly
,MdFitnessCenter
,MdFreeBreakfast
,MdGolfCourse
,MdHotTub
,MdKitchen
,MdPool
,MdRoomService
,MdSmokeFree
,MdSmokingRooms
,MdSpa
,MdCake
,MdDomain
,MdGroup
,MdGroupAdd
,MdLocationCity
,MdMood
,MdMoodBad
,MdNotifications
,MdNotificationsActive
,MdNotificationsNone
,MdNotificationsOff
,MdNotificationsPaused
,MdPages
,MdPartyMode
,MdPeople
,MdPeopleOutline
,MdPerson
,MdPersonAdd
,MdPersonOutline
,MdPlusOne
,MdPoll
,MdPublic
,MdSchool
,MdSentimentDissatisfied
,MdSentimentNeutral
,MdSentimentSatisfied
,MdSentimentVeryDissatisfied
,MdSentimentVerySatisfied
,MdShare
,MdWhatshot
,MdCheckBox
,MdCheckBoxOutlineBlank
,MdIndeterminateCheckBox
,MdRadioButtonChecked
,MdRadioButtonUnchecked
,MdStar
,MdStarBorder
,MdStarHalf } from "react-icons/md";
import Link from 'next/link'

import {
  Collapse,Container, Row, Col,
  Button,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Breadcrumb,BreadcrumbItem,
  NavbarText
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const logout  = {

    
  };
  const mystyle = {
   
    display: 'inline-block',
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: "2px",
    borderRadius: "9px",
    width: '40px'
  };
  const white = {
    color:"white"
  }
  return (
    <div>
      <Navbar color="primary" light expand="md">
        <NavbarBrand className="justify-content-md-center" style={white} href="/">GABRIEL STORE <MdSpeakerPhone style={{fontSize:"32px"}}/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse style={white} isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
           
           
         
          <NavbarText style={white}>Username</NavbarText>
        
          </Nav>  
           <a onclick={{logout}}>sair</a>
        </Collapse>
      </Navbar>
      <div>
        
        <Breadcrumb>
          <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
          <BreadcrumbItem><a href="/categorias">Categorias</a></BreadcrumbItem>
          <BreadcrumbItem><a href="/categorias">Adicionar Categorias</a></BreadcrumbItem>

        </Breadcrumb>
      </div>
     
      <Container>
      
   
<button ><Md3DRotation
/></button ><button ><MdAccessibility
/></button ><button ><MdAccessible
/></button ><button ><MdAccountBalance
/></button ><button ><MdAccountBalanceWallet
/></button ><button ><MdAccountBox
/></button ><button ><MdAccountCircle
/></button ><button ><MdAddShoppingCart
/></button ><button ><MdAlarm
/></button ><button ><MdAlarmAdd
/></button ><button ><MdAlarmOff
/></button ><button ><MdAlarmOn
/></button ><button ><MdAllOut
/></button ><button ><MdAndroid
/></button ><button ><MdAnnouncement
/></button ><button ><MdAspectRatio
/></button ><button ><MdAssessment
/></button ><button ><MdAssignment
/></button ><button ><MdAssignmentInd
/></button ><button ><MdAssignmentLate
/></button ><button ><MdAssignmentReturn
/></button ><button ><MdAssignmentReturned
/></button ><button ><MdAssignmentTurnedIn
/></button ><button ><MdAutorenew
/></button ><button ><MdBackup
/></button ><button ><MdBook
/></button ><button ><MdBookmark
/></button ><button ><MdBookmarkBorder
/></button ><button ><MdBugReport
/></button ><button ><MdBuild
/></button ><button ><MdCached
/></button ><button ><MdCameraEnhance
/></button ><button ><MdCardGiftcard
/></button ><button ><MdCardMembership
/></button ><button ><MdCardTravel
/></button ><button ><MdChangeHistory
/></button ><button ><MdCheckCircle
/></button ><button ><MdChromeReaderMode
/></button ><button ><MdClass
/></button ><button ><MdCode
/></button ><button ><MdCompareArrows
/></button ><button ><MdCopyright
/></button ><button ><MdCreditCard
/></button ><button ><MdDashboard
/></button ><button ><MdDateRange
/></button ><button ><MdDelete
/></button ><button ><MdDeleteForever
/></button ><button ><MdDescription
/></button ><button ><MdDns
/></button ><button ><MdDone
/></button ><button ><MdDoneAll
/></button ><button ><MdDonutLarge
/></button ><button ><MdDonutSmall
/></button ><button ><MdEject
/></button ><button ><MdEuroSymbol
/></button ><button ><MdEvent
/></button ><button ><MdEventSeat
/></button ><button ><MdExitToApp
/></button ><button ><MdExplore
/></button ><button ><MdExtension
/></button ><button ><MdFace
/></button ><button ><MdFavorite
/></button ><button ><MdFavoriteBorder
/></button ><button ><MdFeedback
/></button ><button ><MdFindInPage
/></button ><button ><MdFindReplace
/></button ><button ><MdFingerprint
/></button ><button ><MdFlightLand
/></button ><button ><MdFlightTakeoff
/></button ><button ><MdFlipToBack
/></button ><button ><MdFlipToFront
/></button ><button ><MdGTranslate
/></button ><button ><MdGavel
/></button ><button ><MdGetApp
/></button ><button ><MdGif
/></button ><button ><MdGrade
/></button ><button ><MdGroupWork
/></button ><button ><MdHelp
/></button ><button ><MdHelpOutline
/></button ><button ><MdHighlightOff
/></button ><button ><MdHistory
/></button ><button ><MdHome
/></button ><button ><MdHourglassEmpty
/></button ><button ><MdHourglassFull
/></button ><button ><MdHttp
/></button ><button ><MdHttps
/></button ><button ><MdImportantDevices
/></button ><button ><MdInfo
/></button ><button ><MdInfoOutline
/></button ><button ><MdInput
/></button ><button ><MdInvertColors
/></button ><button ><MdLabel
/></button ><button ><MdLabelOutline
/></button ><button ><MdLanguage
/></button ><button ><MdLaunch
/></button ><button ><MdLightbulbOutline
/></button ><button ><MdLineStyle
/></button ><button ><MdLineWeight
/></button ><button ><MdList
/></button ><button ><MdLock
/></button ><button ><MdLockOpen
/></button ><button ><MdLockOutline
/></button ><button ><MdLoyalty
/></button ><button ><MdMarkunreadMailbox
/></button ><button ><MdMotorcycle
/></button ><button ><MdNoteAdd
/></button ><button ><MdOfflinePin
/></button ><button ><MdOpacity
/></button ><button ><MdOpenInBrowser
/></button ><button ><MdOpenInNew
/></button ><button ><MdOpenWith
/></button ><button ><MdPageview
/></button ><button ><MdPanTool
/></button ><button ><MdPayment
/></button ><button ><MdPermCameraMic
/></button ><button ><MdPermContactCalendar
/></button ><button ><MdPermDataSetting
/></button ><button ><MdPermDeviceInformation
/></button ><button ><MdPermIdentity
/></button ><button ><MdPermMedia
/></button ><button ><MdPermPhoneMsg
/></button ><button ><MdPermScanWifi
/></button ><button ><MdPets
/></button ><button ><MdPictureInPicture
/></button ><button ><MdPictureInPictureAlt
/></button ><button ><MdPlayForWork
/></button ><button ><MdPolymer
/></button ><button ><MdPowerSettingsNew
/></button ><button ><MdPregnantWoman
/></button ><button ><MdPrint
/></button ><button ><MdQueryBuilder
/></button ><button ><MdQuestionAnswer
/></button ><button ><MdReceipt
/></button ><button ><MdRecordVoiceOver
/></button ><button ><MdRedeem
/></button ><button ><MdRemoveShoppingCart
/></button ><button ><MdReorder
/></button ><button ><MdReportProblem
/></button ><button ><MdRestore
/></button ><button ><MdRestorePage
/></button ><button ><MdRoom
/></button ><button ><MdRoundedCorner
/></button ><button ><MdRowing
/></button ><button ><MdSchedule
/></button ><button ><MdSearch
/></button ><button ><MdSettings
/></button ><button ><MdSettingsApplications
/></button ><button ><MdSettingsBackupRestore
/></button ><button ><MdSettingsBluetooth
/></button ><button ><MdSettingsBrightness
/></button ><button ><MdSettingsCell
/></button ><button ><MdSettingsEthernet
/></button ><button ><MdSettingsInputAntenna
/></button ><button ><MdSettingsInputComponent
/></button ><button ><MdSettingsInputComposite
/></button ><button ><MdSettingsInputHdmi
/></button ><button ><MdSettingsInputSvideo
/></button ><button ><MdSettingsOverscan
/></button ><button ><MdSettingsPhone
/></button ><button ><MdSettingsPower
/></button ><button ><MdSettingsRemote
/></button ><button ><MdSettingsVoice
/></button ><button ><MdShop
/></button ><button ><MdShopTwo
/></button ><button ><MdShoppingBasket
/></button ><button ><MdShoppingCart
/></button ><button ><MdSpeakerNotes
/></button ><button ><MdSpeakerNotesOff
/></button ><button ><MdSpellcheck
/></button ><button ><MdStars
/></button ><button ><MdStore
/></button ><button ><MdSubject
/></button ><button ><MdSupervisorAccount
/></button ><button ><MdSwapHoriz
/></button ><button ><MdSwapVert
/></button ><button ><MdSwapVerticalCircle
/></button ><button ><MdSystemUpdateAlt
/></button ><button ><MdTab
/></button ><button ><MdTabUnselected
/></button ><button ><MdTheaters
/></button ><button ><MdThumbDown
/></button ><button ><MdThumbUp
/></button ><button ><MdThumbsUpDown
/></button ><button ><MdTimeline
/></button ><button ><MdToc
/></button ><button ><MdToday
/></button ><button ><MdToll
/></button ><button ><MdTouchApp
/></button ><button ><MdTrackChanges
/></button ><button ><MdTranslate
/></button ><button ><MdTrendingDown
/></button ><button ><MdTrendingFlat
/></button ><button ><MdTrendingUp
/></button ><button ><MdTurnedIn
/></button ><button ><MdTurnedInNot
/></button ><button ><MdUpdate
/></button ><button ><MdVerifiedUser
/></button ><button ><MdViewAgenda
/></button ><button ><MdViewArray
/></button ><button ><MdViewCarousel
/></button ><button ><MdViewColumn
/></button ><button ><MdViewDay
/></button ><button ><MdViewHeadline
/></button ><button ><MdViewList
/></button ><button ><MdViewModule
/></button ><button ><MdViewQuilt
/></button ><button ><MdViewStream
/></button ><button ><MdViewWeek
/></button ><button ><MdVisibility
/></button ><button ><MdVisibilityOff
/></button ><button ><MdWatchLater
/></button ><button ><MdWork
/></button ><button ><MdYoutubeSearchedFor
/></button ><button ><MdZoomIn
/></button ><button ><MdZoomOut
/></button ><button ><MdAddAlert
/></button ><button ><MdError
/></button ><button ><MdErrorOutline
/></button ><button ><MdWarning
/></button ><button ><MdAddToQueue
/></button ><button ><MdAirplay
/></button ><button ><MdAlbum
/></button ><button ><MdArtTrack
/></button ><button ><MdAvTimer
/></button ><button ><MdBrandingWatermark
/></button ><button ><MdCallToAction
/></button ><button ><MdClosedCaption
/></button ><button ><MdEqualizer
/></button ><button ><MdExplicit
/></button ><button ><MdFastForward
/></button ><button ><MdFastRewind
/></button ><button ><MdFeaturedPlayList
/></button ><button ><MdFeaturedVideo
/></button ><button ><MdFiberDvr
/></button ><button ><MdFiberManualRecord
/></button ><button ><MdFiberNew
/></button ><button ><MdFiberPin
/></button ><button ><MdFiberSmartRecord
/></button ><button ><MdForward10
/></button ><button ><MdForward30
/></button ><button ><MdForward5
/></button ><button ><MdGames
/></button ><button ><MdHd
/></button ><button ><MdHearing
/></button ><button ><MdHighQuality
/></button ><button ><MdLibraryAdd
/></button ><button ><MdLibraryBooks
/></button ><button ><MdLibraryMusic
/></button ><button ><MdLoop
/></button ><button ><MdMic
/></button ><button ><MdMicNone
/></button ><button ><MdMicOff
/></button ><button ><MdMovie
/></button ><button ><MdMusicVideo
/></button ><button ><MdNewReleases
/></button ><button ><MdNotInterested
/></button ><button ><MdNote
/></button ><button ><MdPause
/></button ><button ><MdPauseCircleFilled
/></button ><button ><MdPauseCircleOutline
/></button ><button ><MdPlayArrow
/></button ><button ><MdPlayCircleFilled
/></button ><button ><MdPlayCircleOutline
/></button ><button ><MdPlaylistAdd
/></button ><button ><MdPlaylistAddCheck
/></button ><button ><MdPlaylistPlay
/></button ><button ><MdQueue
/></button ><button ><MdQueueMusic
/></button ><button ><MdQueuePlayNext
/></button ><button ><MdRadio
/></button ><button ><MdRecentActors
/></button ><button ><MdRemoveFromQueue
/></button ><button ><MdRepeat
/></button ><button ><MdRepeatOne
/></button ><button ><MdReplay10
/></button ><button ><MdReplay
/></button ><button ><MdReplay30
/></button ><button ><MdReplay5
/></button ><button ><MdShuffle
/></button ><button ><MdSkipNext
/></button ><button ><MdSkipPrevious
/></button ><button ><MdSlowMotionVideo
/></button ><button ><MdSnooze
/></button ><button ><MdSortByAlpha
/></button ><button ><MdStop
/></button ><button ><MdSubscriptions
/></button ><button ><MdSubtitles
/></button ><button ><MdSurroundSound
/></button ><button ><MdVideoCall
/></button ><button ><MdVideoLabel
/></button ><button ><MdVideoLibrary
/></button ><button ><MdVideocam
/></button ><button ><MdVideocamOff
/></button ><button ><MdVolumeDown
/></button ><button ><MdVolumeMute
/></button ><button ><MdVolumeOff
/></button ><button ><MdVolumeUp
/></button ><button ><MdWeb
/></button ><button ><MdWebAsset
/></button ><button ><MdBusiness
/></button ><button ><MdCall
/></button ><button ><MdCallEnd
/></button ><button ><MdCallMade
/></button ><button ><MdCallMerge
/></button ><button ><MdCallMissed
/></button ><button ><MdCallMissedOutgoing
/></button ><button ><MdCallReceived
/></button ><button ><MdCallSplit
/></button ><button ><MdChat
/></button ><button ><MdChatBubble
/></button ><button ><MdChatBubbleOutline
/></button ><button ><MdClearAll
/></button ><button ><MdComment
/></button ><button ><MdContactMail
/></button ><button ><MdContactPhone
/></button ><button ><MdContacts
/></button ><button ><MdDialerSip
/></button ><button ><MdDialpad
/></button ><button ><MdEmail
/></button ><button ><MdForum
/></button ><button ><MdImportContacts
/></button ><button ><MdImportExport
/></button ><button ><MdInvertColorsOff
/></button ><button ><MdLiveHelp
/></button ><button ><MdLocationOff
/></button ><button ><MdLocationOn
/></button ><button ><MdMailOutline
/></button ><button ><MdMessage
/></button ><button ><MdNoSim
/></button ><button ><MdPhone
/></button ><button ><MdPhonelinkErase
/></button ><button ><MdPhonelinkLock
/></button ><button ><MdPhonelinkRing
/></button ><button ><MdPhonelinkSetup
/></button ><button ><MdPortableWifiOff
/></button ><button ><MdPresentToAll
/></button ><button ><MdRingVolume
/></button ><button ><MdRssFeed
/></button ><button ><MdScreenShare
/></button ><button ><MdSpeakerPhone
/></button ><button ><MdStayCurrentLandscape
/></button ><button ><MdStayCurrentPortrait
/></button ><button ><MdStayPrimaryLandscape
/></button ><button ><MdStayPrimaryPortrait
/></button ><button ><MdStopScreenShare
/></button ><button ><MdSwapCalls
/></button ><button ><MdTextsms
/></button ><button ><MdVoicemail
/></button ><button ><MdVpnKey
/></button ><button ><MdAdd
/></button ><button ><MdAddBox
/></button ><button ><MdAddCircle
/></button ><button ><MdAddCircleOutline
/></button ><button ><MdArchive
/></button ><button ><MdBackspace
/></button ><button ><MdBlock
/></button ><button ><MdClear
/></button ><button ><MdContentCopy
/></button ><button ><MdContentCut
/></button ><button ><MdContentPaste
/></button ><button ><MdCreate
/></button ><button ><MdDeleteSweep
/></button ><button ><MdDrafts
/></button ><button ><MdFilterList
/></button ><button ><MdFlag
/></button ><button ><MdFontDownload
/></button ><button ><MdForward
/></button ><button ><MdGesture
/></button ><button ><MdInbox
/></button ><button ><MdLink
/></button ><button ><MdLowPriority
/></button ><button ><MdMail
/></button ><button ><MdMarkunread
/></button ><button ><MdMoveToInbox
/></button ><button ><MdNextWeek
/></button ><button ><MdRedo
/></button ><button ><MdRemove
/></button ><button ><MdRemoveCircle
/></button ><button ><MdRemoveCircleOutline
/></button ><button ><MdReply
/></button ><button ><MdReplyAll
/></button ><button ><MdReport
/></button ><button ><MdSave
/></button ><button ><MdSelectAll
/></button ><button ><MdSend
/></button ><button ><MdSort
/></button ><button ><MdTextFormat
/></button ><button ><MdUnarchive
/></button ><button ><MdUndo
/></button ><button ><MdWeekend
/></button ><button ><MdAccessAlarm
/></button ><button ><MdAccessAlarms
/></button ><button ><MdAccessTime
/></button ><button ><MdAddAlarm
/></button ><button ><MdAirplanemodeActive
/></button ><button ><MdAirplanemodeInactive
/></button ><button ><MdBattery20
/></button ><button ><MdBattery30
/></button ><button ><MdBattery50
/></button ><button ><MdBattery60
/></button ><button ><MdBattery80
/></button ><button ><MdBattery90
/></button ><button ><MdBatteryAlert
/></button ><button ><MdBatteryCharging20
/></button ><button ><MdBatteryCharging30
/></button ><button ><MdBatteryCharging50
/></button ><button ><MdBatteryCharging60
/></button ><button ><MdBatteryCharging80
/></button ><button ><MdBatteryCharging90
/></button ><button ><MdBatteryChargingFull
/></button ><button ><MdBatteryFull
/></button ><button ><MdBatteryStd
/></button ><button ><MdBatteryUnknown
/></button ><button ><MdBluetooth
/></button ><button ><MdBluetoothConnected
/></button ><button ><MdBluetoothDisabled
/></button ><button ><MdBluetoothSearching
/></button ><button ><MdBrightnessAuto
/></button ><button ><MdBrightnessHigh
/></button ><button ><MdBrightnessLow
/></button ><button ><MdBrightnessMedium
/></button ><button ><MdDataUsage
/></button ><button ><MdDeveloperMode
/></button ><button ><MdDevices
/></button ><button ><MdDvr
/></button ><button ><MdGpsFixed
/></button ><button ><MdGpsNotFixed
/></button ><button ><MdGpsOff
/></button ><button ><MdGraphicEq
/></button ><button ><MdLocationDisabled
/></button ><button ><MdLocationSearching
/></button ><button ><MdNetworkCell
/></button ><button ><MdNetworkWifi
/></button ><button ><MdNfc
/></button ><button ><MdScreenLockLandscape
/></button ><button ><MdScreenLockPortrait
/></button ><button ><MdScreenLockRotation
/></button ><button ><MdScreenRotation
/></button ><button ><MdSdStorage
/></button ><button ><MdSettingsSystemDaydream/></button ><button ><MdSignalCellular0Bar
/></button ><button ><MdSignalCellular1Bar
/></button ><button ><MdSignalCellular2Bar
/></button ><button ><MdSignalCellular3Bar
/></button ><button ><MdSignalCellular4Bar
/></button ><button ><MdSignalCellularConnectedNoInternet0Bar
/></button ><button ><MdSignalCellularConnectedNoInternet1Bar
/></button ><button ><MdSignalCellularConnectedNoInternet2Bar
/></button ><button ><MdSignalCellularConnectedNoInternet3Bar
/></button ><button ><MdSignalCellularConnectedNoInternet4Bar
/></button ><button ><MdSignalCellularNoSim
/></button ><button ><MdSignalCellularNull
/></button ><button ><MdSignalCellularOff
/></button ><button ><MdSignalWifi0Bar
/></button ><button ><MdSignalWifi1Bar
/></button ><button ><MdSignalWifi1BarLock
/></button ><button ><MdSignalWifi2Bar
/></button ><button ><MdSignalWifi2BarLock
/></button ><button ><MdSignalWifi3Bar
/></button ><button ><MdSignalWifi3BarLock
/></button ><button ><MdSignalWifi4Bar
/></button ><button ><MdSignalWifi4BarLock
/></button ><button ><MdSignalWifiOff
/></button ><button ><MdStorage
/></button ><button ><MdUsb
/></button ><button ><MdWallpaper
/></button ><button ><MdWidgets
/></button ><button ><MdWifiLock
/></button ><button ><MdWifiTethering
/></button ><button ><MdAttachFile
/></button ><button ><MdAttachMoney
/></button ><button ><MdBorderAll
/></button ><button ><MdBorderBottom
/></button ><button ><MdBorderClear
/></button ><button ><MdBorderColor
/></button ><button ><MdBorderHorizontal
/></button ><button ><MdBorderInner
/></button ><button ><MdBorderLeft
/></button ><button ><MdBorderOuter
/></button ><button ><MdBorderRight
/></button ><button ><MdBorderStyle
/></button ><button ><MdBorderTop
/></button ><button ><MdBorderVertical
/></button ><button ><MdBubbleChart
/></button ><button ><MdDragHandle
/></button ><button ><MdFormatAlignCenter
/></button ><button ><MdFormatAlignJustify
/></button ><button ><MdFormatAlignLeft
/></button ><button ><MdFormatAlignRight
/></button ><button ><MdFormatBold
/></button ><button ><MdFormatClear
/></button ><button ><MdFormatColorFill
/></button ><button ><MdFormatColorReset
/></button ><button ><MdFormatColorText
/></button ><button ><MdFormatIndentDecrease
/></button ><button ><MdFormatIndentIncrease
/></button ><button ><MdFormatItalic
/></button ><button ><MdFormatLineSpacing
/></button ><button ><MdFormatListBulleted
/></button ><button ><MdFormatListNumbered
/></button ><button ><MdFormatPaint
/></button ><button ><MdFormatQuote
/></button ><button ><MdFormatShapes
/></button ><button ><MdFormatSize
/></button ><button ><MdFormatStrikethrough
/></button ><button ><MdFormatTextdirectionLToR
/></button ><button ><MdFormatTextdirectionRToL
/></button ><button ><MdFormatUnderlined
/></button ><button ><MdFunctions
/></button ><button ><MdHighlight
/></button ><button ><MdInsertChart
/></button ><button ><MdInsertComment
/></button ><button ><MdInsertDriveFile
/></button ><button ><MdInsertEmoticon
/></button ><button ><MdInsertInvitation
/></button ><button ><MdInsertLink
/></button ><button ><MdInsertPhoto
/></button ><button ><MdLinearScale
/></button ><button ><MdMergeType
/></button ><button ><MdModeComment
/></button ><button ><MdModeEdit
/></button ><button ><MdMonetizationOn
/></button ><button ><MdMoneyOff
/></button ><button ><MdMultilineChart
/></button ><button ><MdPieChart
/></button ><button ><MdPieChartOutlined
/></button ><button ><MdPublish
/></button ><button ><MdShortText
/></button ><button ><MdShowChart
/></button ><button ><MdSpaceBar
/></button ><button ><MdStrikethroughS
/></button ><button ><MdTextFields
/></button ><button ><MdTitle
/></button ><button ><MdVerticalAlignBottom
/></button ><button ><MdVerticalAlignCenter
/></button ><button ><MdVerticalAlignTop
/></button ><button ><MdWrapText
/></button ><button ><MdAttachment
/></button ><button ><MdCloud
/></button ><button ><MdCloudCircle
/></button ><button ><MdCloudDone
/></button ><button ><MdCloudDownload
/></button ><button ><MdCloudOff
/></button ><button ><MdCloudQueue
/></button ><button ><MdCloudUpload
/></button ><button ><MdCreateNewFolder
/></button ><button ><MdFileDownload
/></button ><button ><MdFileUpload
/></button ><button ><MdFolder
/></button ><button ><MdFolderOpen
/></button ><button ><MdFolderShared
/></button ><button ><MdCast
/></button ><button ><MdCastConnected
/></button ><button ><MdComputer
/></button ><button ><MdDesktopMac
/></button ><button ><MdDesktopWindows
/></button ><button ><MdDeveloperBoard
/></button ><button ><MdDeviceHub
/></button ><button ><MdDevicesOther
/></button ><button ><MdDock
/></button ><button ><MdGamepad
/></button ><button ><MdHeadset
/></button ><button ><MdHeadsetMic
/></button ><button ><MdKeyboard
/></button ><button ><MdKeyboardArrowDown
/></button ><button ><MdKeyboardArrowLeft
/></button ><button ><MdKeyboardArrowRight
/></button ><button ><MdKeyboardArrowUp
/></button ><button ><MdKeyboardBackspace
/></button ><button ><MdKeyboardCapslock
/></button ><button ><MdKeyboardHide
/></button ><button ><MdKeyboardReturn
/></button ><button ><MdKeyboardTab
/></button ><button ><MdKeyboardVoice
/></button ><button ><MdLaptop
/></button ><button ><MdLaptopChromebook
/></button ><button ><MdLaptopMac
/></button ><button ><MdLaptopWindows
/></button ><button ><MdMemory
/></button ><button ><MdMouse
/></button ><button ><MdPhoneAndroid
/></button ><button ><MdPhoneIphone
/></button ><button ><MdPhonelink
/></button ><button ><MdPhonelinkOff
/></button ><button ><MdPowerInput
/></button ><button ><MdRouter
/></button ><button ><MdScanner
/></button ><button ><MdSecurity
/></button ><button ><MdSimCard
/></button ><button ><MdSmartphone
/></button ><button ><MdSpeaker
/></button ><button ><MdSpeakerGroup
/></button ><button ><MdTablet
/></button ><button ><MdTabletAndroid
/></button ><button ><MdTabletMac
/></button ><button ><MdToys
/></button ><button ><MdTv
/></button ><button ><MdVideogameAsset
/></button ><button ><MdWatch
/></button ><button ><MdAddAPhoto
/></button ><button ><MdAddToPhotos
/></button ><button ><MdAdjust
/></button ><button ><MdAssistant
/></button ><button ><MdAssistantPhoto
/></button ><button ><MdAudiotrack
/></button ><button ><MdBlurCircular
/></button ><button ><MdBlurLinear
/></button ><button ><MdBlurOff
/></button ><button ><MdBlurOn
/></button ><button ><MdBrightness1
/></button ><button ><MdBrightness2
/></button ><button ><MdBrightness3
/></button ><button ><MdBrightness4
/></button ><button ><MdBrightness5
/></button ><button ><MdBrightness6
/></button ><button ><MdBrightness7
/></button ><button ><MdBrokenImage
/></button ><button ><MdBrush
/></button ><button ><MdBurstMode
/></button ><button ><MdCamera
/></button ><button ><MdCameraAlt
/></button ><button ><MdCameraFront
/></button ><button ><MdCameraRear
/></button ><button ><MdCameraRoll
/></button ><button ><MdCenterFocusStrong
/></button ><button ><MdCenterFocusWeak
/></button ><button ><MdCollections
/></button ><button ><MdCollectionsBookmark
/></button ><button ><MdColorLens
/></button ><button ><MdColorize
/></button ><button ><MdCompare
/></button ><button ><MdControlPoint
/></button ><button ><MdControlPointDuplicate
/></button ><button ><MdCrop169
/></button ><button ><MdCrop
/></button ><button ><MdCrop32
/></button ><button ><MdCrop54
/></button ><button ><MdCrop75
/></button ><button ><MdCropDin
/></button ><button ><MdCropFree
/></button ><button ><MdCropLandscape
/></button ><button ><MdCropOriginal
/></button ><button ><MdCropPortrait
/></button ><button ><MdCropRotate
/></button ><button ><MdCropSquare
/></button ><button ><MdDehaze
/></button ><button ><MdDetails
/></button ><button ><MdEdit
/></button ><button ><MdExposure
/></button ><button ><MdExposureNeg1
/></button ><button ><MdExposureNeg2
/></button ><button ><MdExposurePlus1
/></button ><button ><MdExposurePlus2
/></button ><button ><MdExposureZero
/></button ><button ><MdFilter1
/></button ><button ><MdFilter2
/></button ><button ><MdFilter
/></button ><button ><MdFilter3
/></button ><button ><MdFilter4
/></button ><button ><MdFilter5
/></button ><button ><MdFilter6
/></button ><button ><MdFilter7
/></button ><button ><MdFilter8
/></button ><button ><MdFilter9
/></button ><button ><MdFilter9Plus
/></button ><button ><MdFilterBAndW
/></button ><button ><MdFilterCenterFocus
/></button ><button ><MdFilterDrama
/></button ><button ><MdFilterFrames
/></button ><button ><MdFilterHdr
/></button ><button ><MdFilterNone
/></button ><button ><MdFilterTiltShift
/></button ><button ><MdFilterVintage
/></button ><button ><MdFlare
/></button ><button ><MdFlashAuto
/></button ><button ><MdFlashOff
/></button ><button ><MdFlashOn
/></button ><button ><MdFlip
/></button ><button ><MdGradient
/></button ><button ><MdGrain
/></button ><button ><MdGridOff
/></button ><button ><MdGridOn
/></button ><button ><MdHdrOff
/></button ><button ><MdHdrOn
/></button ><button ><MdHdrStrong
/></button ><button ><MdHdrWeak
/></button ><button ><MdHealing
/></button ><button ><MdImage
/></button ><button ><MdImageAspectRatio
/></button ><button ><MdIso
/></button ><button ><MdLandscape
/></button ><button ><MdLeakAdd
/></button ><button ><MdLeakRemove
/></button ><button ><MdLens
/></button ><button ><MdLinkedCamera
/></button ><button ><MdLooks
/></button ><button ><MdLooks3
/></button ><button ><MdLooks4
/></button ><button ><MdLooks5
/></button ><button ><MdLooks6
/></button ><button ><MdLooksOne
/></button ><button ><MdLooksTwo
/></button ><button ><MdLoupe
/></button ><button ><MdMonochromePhotos
/></button ><button ><MdMovieCreation
/></button ><button ><MdMovieFilter
/></button ><button ><MdMusicNote
/></button ><button ><MdNature
/></button ><button ><MdNaturePeople
/></button ><button ><MdNavigateBefore
/></button ><button ><MdNavigateNext
/></button ><button ><MdPalette
/></button ><button ><MdPanorama
/></button ><button ><MdPanoramaFishEye
/></button ><button ><MdPanoramaHorizontal
/></button ><button ><MdPanoramaVertical
/></button ><button ><MdPanoramaWideAngle
/></button ><button ><MdPhoto
/></button ><button ><MdPhotoAlbum
/></button ><button ><MdPhotoCamera
/></button ><button ><MdPhotoFilter
/></button ><button ><MdPhotoLibrary
/></button ><button ><MdPhotoSizeSelectActual
/></button ><button ><MdPhotoSizeSelectLarge
/></button ><button ><MdPhotoSizeSelectSmall
/></button ><button ><MdPictureAsPdf
/></button ><button ><MdPortrait
/></button ><button ><MdRemoveRedEye
/></button ><button ><MdRotate90DegreesCcw
/></button ><button ><MdRotateLeft
/></button ><button ><MdRotateRight
/></button ><button ><MdSlideshow
/></button ><button ><MdStraighten
/></button ><button ><MdStyle
/></button ><button ><MdSwitchCamera
/></button ><button ><MdSwitchVideo
/></button ><button ><MdTagFaces
/></button ><button ><MdTexture
/></button ><button ><MdTimelapse
/></button ><button ><MdTimer10
/></button ><button ><MdTimer
/></button ><button ><MdTimer3
/></button ><button ><MdTimerOff
/></button ><button ><MdTonality
/></button ><button ><MdTransform
/></button ><button ><MdTune
/></button ><button ><MdViewComfy
/></button ><button ><MdViewCompact
/></button ><button ><MdVignette
/></button ><button ><MdWbAuto
/></button ><button ><MdWbCloudy
/></button ><button ><MdWbIncandescent
/></button ><button ><MdWbIridescent
/></button ><button ><MdWbSunny
/></button ><button ><MdAddLocation
/></button ><button ><MdBeenhere
/></button ><button ><MdDirections
/></button ><button ><MdDirectionsBike
/></button ><button ><MdDirectionsBoat
/></button ><button ><MdDirectionsBus
/></button ><button ><MdDirectionsCar
/></button ><button ><MdDirectionsRailway
/></button ><button ><MdDirectionsRun
/></button ><button ><MdDirectionsSubway
/></button ><button ><MdDirectionsTransit
/></button ><button ><MdDirectionsWalk
/></button ><button ><MdEditLocation
/></button ><button ><MdEvStation
/></button ><button ><MdFlight
/></button ><button ><MdHotel
/></button ><button ><MdLayers
/></button ><button ><MdLayersClear
/></button ><button ><MdLocalActivity
/></button ><button ><MdLocalAirport
/></button ><button ><MdLocalAtm
/></button ><button ><MdLocalBar
/></button ><button ><MdLocalCafe
/></button ><button ><MdLocalCarWash
/></button ><button ><MdLocalConvenienceStore
/></button ><button ><MdLocalDining
/></button ><button ><MdLocalDrink
/></button ><button ><MdLocalFlorist
/></button ><button ><MdLocalGasStation
/></button ><button ><MdLocalGroceryStore
/></button ><button ><MdLocalHospital
/></button ><button ><MdLocalHotel
/></button ><button ><MdLocalLaundryService
/></button ><button ><MdLocalLibrary
/></button ><button ><MdLocalMall
/></button ><button ><MdLocalMovies
/></button ><button ><MdLocalOffer
/></button ><button ><MdLocalParking
/></button ><button ><MdLocalPharmacy
/></button ><button ><MdLocalPhone
/></button ><button ><MdLocalPizza
/></button ><button ><MdLocalPlay
/></button ><button ><MdLocalPostOffice
/></button ><button ><MdLocalPrintshop
/></button ><button ><MdLocalSee
/></button ><button ><MdLocalShipping
/></button ><button ><MdLocalTaxi
/></button ><button ><MdMap
/></button ><button ><MdMyLocation
/></button ><button ><MdNavigation
/></button ><button ><MdNearMe
/></button ><button ><MdPersonPin
/></button ><button ><MdPersonPinCircle
/></button ><button ><MdPinDrop
/></button ><button ><MdPlace
/></button ><button ><MdRateReview
/></button ><button ><MdRestaurant
/></button ><button ><MdRestaurantMenu
/></button ><button ><MdSatellite
/></button ><button ><MdStoreMallDirectory
/></button ><button ><MdStreetview
/></button ><button ><MdSubway
/></button ><button ><MdTerrain
/></button ><button ><MdTraffic
/></button ><button ><MdTrain
/></button ><button ><MdTram
/></button ><button ><MdTransferWithinAStation
/></button ><button ><MdZoomOutMap
/></button ><button ><MdApps
/></button ><button ><MdArrowBack
/></button ><button ><MdArrowDownward
/></button ><button ><MdArrowDropDown
/></button ><button ><MdArrowDropDownCircle
/></button ><button ><MdArrowDropUp
/></button ><button ><MdArrowForward
/></button ><button ><MdArrowUpward
/></button ><button ><MdCancel
/></button ><button ><MdCheck
/></button ><button ><MdChevronLeft
/></button ><button ><MdChevronRight
/></button ><button ><MdClose
/></button ><button ><MdExpandLess
/></button ><button ><MdExpandMore
/></button ><button ><MdFirstPage
/></button ><button ><MdFullscreen
/></button ><button ><MdFullscreenExit
/></button ><button ><MdLastPage
/></button ><button ><MdMenu
/></button ><button ><MdMoreHoriz
/></button ><button ><MdMoreVert
/></button ><button ><MdRefresh
/></button ><button ><MdSubdirectoryArrowLeft
/></button ><button ><MdSubdirectoryArrowRight
/></button ><button ><MdUnfoldLess
/></button ><button ><MdUnfoldMore
/></button ><button ><MdAdb
/></button ><button ><MdAirlineSeatFlat
/></button ><button ><MdAirlineSeatFlatAngled
/></button ><button ><MdAirlineSeatIndividualSuite
/></button ><button ><MdAirlineSeatLegroomExtra
/></button ><button ><MdAirlineSeatLegroomNormal
/></button ><button ><MdAirlineSeatLegroomReduced
/></button ><button ><MdAirlineSeatReclineExtra
/></button ><button ><MdAirlineSeatReclineNormal
/></button ><button ><MdBluetoothAudio
/></button ><button ><MdConfirmationNumber
/></button ><button ><MdDiscFull
/></button ><button ><MdDoNotDisturb
/></button ><button ><MdDoNotDisturbAlt
/></button ><button ><MdDoNotDisturbOff
/></button ><button ><MdDoNotDisturbOn
/></button ><button ><MdDriveEta
/></button ><button ><MdEnhancedEncryption
/></button ><button ><MdEventAvailable
/></button ><button ><MdEventBusy
/></button ><button ><MdEventNote
/></button ><button ><MdFolderSpecial
/></button ><button ><MdLiveTv
/></button ><button ><MdMms
/></button ><button ><MdMore
/></button ><button ><MdNetworkCheck
/></button ><button ><MdNetworkLocked
/></button ><button ><MdNoEncryption
/></button ><button ><MdOndemandVideo
/></button ><button ><MdPersonalVideo
/></button ><button ><MdPhoneBluetoothSpeaker
/></button ><button ><MdPhoneForwarded
/></button ><button ><MdPhoneInTalk
/></button ><button ><MdPhoneLocked
/></button ><button ><MdPhoneMissed
/></button ><button ><MdPhonePaused
/></button ><button ><MdPower
/></button ><button ><MdPriorityHigh
/></button ><button ><MdRvHookup
/></button ><button ><MdSdCard
/></button ><button ><MdSimCardAlert
/></button ><button ><MdSms
/></button ><button ><MdSmsFailed
/></button ><button ><MdSync
/></button ><button ><MdSyncDisabled
/></button ><button ><MdSyncProblem
/></button ><button ><MdSystemUpdate
/></button ><button ><MdTapAndPlay
/></button ><button ><MdTimeToLeave
/></button ><button ><MdVibration
/></button ><button ><MdVoiceChat
/></button ><button ><MdVpnLock
/></button ><button ><MdWc
/></button ><button ><MdWifi
/></button ><button ><MdAcUnit
/></button ><button ><MdAirportShuttle
/></button ><button ><MdAllInclusive
/></button ><button ><MdBeachAccess
/></button ><button ><MdBusinessCenter
/></button ><button ><MdCasino
/></button ><button ><MdChildCare
/></button ><button ><MdChildFriendly
/></button ><button ><MdFitnessCenter
/></button ><button ><MdFreeBreakfast
/></button ><button ><MdGolfCourse
/></button ><button ><MdHotTub
/></button ><button ><MdKitchen
/></button ><button ><MdPool
/></button ><button ><MdRoomService
/></button ><button ><MdSmokeFree
/></button ><button ><MdSmokingRooms
/></button ><button ><MdSpa
/></button ><button ><MdCake
/></button ><button ><MdDomain
/></button ><button ><MdGroup
/></button ><button ><MdGroupAdd
/></button ><button ><MdLocationCity
/></button ><button ><MdMood
/></button ><button ><MdMoodBad
/></button ><button ><MdNotifications
/></button ><button ><MdNotificationsActive
/></button ><button ><MdNotificationsNone
/></button ><button ><MdNotificationsOff
/></button ><button ><MdNotificationsPaused
/></button ><button ><MdPages
/></button ><button ><MdPartyMode
/></button ><button ><MdPeople
/></button ><button ><MdPeopleOutline
/></button ><button ><MdPerson
/></button ><button ><MdPersonAdd
/></button ><button ><MdPersonOutline
/></button ><button ><MdPlusOne
/></button ><button ><MdPoll
/></button ><button ><MdPublic
/></button ><button ><MdSchool
/></button ><button ><MdSentimentDissatisfied
/></button ><button ><MdSentimentNeutral
/></button ><button ><MdSentimentSatisfied
/></button ><button ><MdSentimentVeryDissatisfied
/></button ><button ><MdSentimentVerySatisfied
/></button ><button ><MdShare
/></button ><button ><MdWhatshot
/></button ><button ><MdCheckBox
/></button ><button ><MdCheckBoxOutlineBlank
/></button ><button ><MdIndeterminateCheckBox
/></button ><button ><MdRadioButtonChecked
/></button ><button ><MdRadioButtonUnchecked
/></button ><button ><MdStar
/></button ><button ><MdStarBorder
/></button ><button ><MdStarHalf/></button >
      
      
      
      </Container>
      
      </div>
  );
}

export default Example;