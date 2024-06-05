{
	engine: 17,
	name: "Lemon",
	modAuthor: "Zen",
	modVersion: "1",
	setup: {
		code: "beef",
		imagePrefix: "beef_fireball_lemon_",
		winSound: "sfx_Meat_Lemon",
		flavors: [
			{
				fid: "default",
				name: "Beef",
				folder: "beef_default"
			},
			{
				fid: "striped",
				name: "Striped Beef",
				folder: "beef_stripes"
			},
			{
				fid: "grape",
				name: "Grape Soda Beef",
				folder: "beef_grapefanta"
			},
			{
				fid: "babyblue",
				name: "Baby Blue Beef",
				folder: "beef_babyblue"
			},
			{
				fid: "plaid",
				name: "Plaid Beef",
				folder: "beef_plaid",
				requireMMR: 1700
			},
			{
				fid: "halloween",
				name: "Bloody Beef",
				folder: "beef_bloody",
				unlockSteam: true,
				requireCode: "halloween_beef",
				theme: "halloween"
			},
			{
				fid: "birthday",
				name: "Tiramisu Beef",
				folder: "beef_tiramisu",
				unlockSteam: true,
				requireCode: "birthday_beef",
				theme: "birthday"
			},
			{
				fid: "normal",
				name: "Normal Beef",
				folder: "beef_normal",
				unlockSteam: true,
				requireCode: "normal_beef",
				theme: "aprilfools"
			},
			{
				fid: "pattern",
				name: "Checkered Beef",
				folder: "beef_pattern",
				requirePremium: true
			}
		],
		stats: {
			maxHealth: 1050,
			speedForward: 0.055,
			speedBackward: 0.04
		},
		defaults: {
			drawBox: {
				center: {
					x: 0,
					y: -0.21
				},
				size: {
					x: 1,
					y: 1.6
				}
			},
			pushboxes: [
				{
					center: {
						x: 0,
						y: 0
					},
					size: {
						x: 1,
						y: 3
					}
				}
			],
			strikeHurtboxes: [
				{
					center: {
						x: 0,
						y: 0
					},
					size: {
						x: 1,
						y: 1
					}
				}
			],
			throwHurtboxes: [
				{
					center: {
						x: 0,
						y: 0
					},
					size: {
						x: 1,
						y: 1
					}
				}
			]
		},
		commands: {
			throw: [
				"4d",
				"5d",
				"6d"
			],
			rapid: [
				"6d"
			],
			burst: [
				"4d"
			],
			reject: [
				"6d"
			]
		},
		input: {
			"4a": "seqid_Meat_Gutpunch",
			"5a": "seqid_Meat_Gutpunch",
			"6a": "seqid_Meat_Gutpunch",
			"4b": "seqid_Meat_HeavyPunch",
			"5b": "seqid_Meat_HeavyPunch",
			"6b": "seqid_Meat_HeavyPunch",
			"4c": "seqid_Beef_FlexStart",
			"5c": "seqid_Beef_LemonThrow",
			"6c": "seqid_Meat_Jump"
		}
	},
	projectiles: {
		proj_Beef_Lemon: {
			displayName: "Lemon",
			displayIndex: 0,
			dieOnConsume: true,
			loop: true,
			offset: {
				x: 1.3,
				y: 0
			},
			sequence: {
				drawBox: {
					center: {
						x: 0,
						y: -0.21
					},
					size: {
						x: 1,
						y: 1.6
					}
				},
				pushboxes: [
				],
				hurtboxes: [
				],
				frames: [
					{
						duration: 5,
						sprite: "0001",
						slide: 0.5,
						attack: {
							isProjectile: true,
							damage: 0.1,
							chip: 0.03,
							blockstun: 30,
							hitstun: 40,
							hitboxes: [
								{
									center: {
										x: 0,
										y: 0.4
									},
									size: {
										x: 0.3,
										y: 0.15
									}
								}
							]
						},
						copyPrevAttack: false
					},
					{
						duration: 5,
						sprite: "0002",
						slide: 0.5,
						copyPrevAttack: true
					},
					{
						duration: 5,
						sprite: "0003",
						slide: 0.5,
						copyPrevAttack: true
					},
					{
						duration: 5,
						sprite: "0004",
						slide: 0.5,
						copyPrevAttack: true
					},
					{
						duration: 5,
						sprite: "0005",
						slide: 0.5,
						copyPrevAttack: true
					},
					{
						duration: 5,
						sprite: "0006",
						slide: 0.5,
						copyPrevAttack: true
					},
					{
						duration: 5,
						sprite: "0007",
						slide: 0.5,
						copyPrevAttack: true
					},
					{
						duration: 5,
						sprite: "0008",
						slide: 0.5,
						copyPrevAttack: true
					}
				]
			}
		},
		proj_Beef_AirLemon: {
			displayName: "Air Lemon",
			displayIndex: 0,
			dieOnConsume: true,
			loop: false,
			offset: {
				x: 1.5,
				y: -0.2
			},
			sequence: {
				drawBox: {
					center: {
						x: 0,
						y: -0.21
					},
					size: {
						x: 1,
						y: 1.6
					}
				},
				pushboxes: [
				],
				hurtboxes: [
				],
				frames: [
					{
						duration: 5,
						sprite: "noshadow_0001",
						slide: 0.5,
						hover: 0.1,
						attack: {
							isProjectile: true,
							damage: 0.1,
							chip: 0.03,
							blockstun: 25,
							hitstun: 35,
							hitboxes: [
								{
									center: {
										x: 0,
										y: 0.4
									},
									size: {
										x: 0.3,
										y: 0.15
									}
								}
							]
						},
						copyPrevAttack: false
					},
					{
						duration: 5,
						sprite: "noshadow_0002",
						slide: 0.5,
						hover: 0.1,
						copyPrevAttack: true
					},
					{
						duration: 5,
						sprite: "noshadow_0003",
						slide: 0.5,
						hover: 0.1,
						copyPrevAttack: true
					},
					{
						duration: 5,
						sprite: "noshadow_0004",
						slide: 0.5,
						hover: 0.1,
						copyPrevAttack: true
					},
					{
						duration: 5,
						sprite: "noshadow_0005",
						slide: 0.5,
						hover: 0.1,
						copyPrevAttack: true
					},
					{
						duration: 5,
						sprite: "noshadow_0006",
						slide: 0.5,
						hover: 0.1,
						copyPrevAttack: true
					},
					{
						duration: 5,
						sprite: "noshadow_0007",
						slide: 0.5,
						hover: 0.1,
						copyPrevAttack: true
					},
					{
						duration: 5,
						sprite: "noshadow_0008",
						slide: 0.5,
						hover: 0.1,
						copyPrevAttack: true
					},
					{
						duration: 5,
						sprite: "noshadow_0001",
						slide: 0.5,
						hover: 0.1,
						copyPrevAttack: true
					},
					{
						duration: 5,
						sprite: "noshadow_0002",
						slide: 0.5,
						hover: 0.1,
						copyPrevAttack: true
					},
					{
						duration: 5,
						sprite: "noshadow_0003",
						slide: 0.5,
						hover: 0.1,
						copyPrevAttack: true
					},
					{
						duration: 5,
						sprite: "noshadow_0004",
						slide: 0.5,
						hover: 0.1,
						copyPrevAttack: true
					}
				]
			}
		}
	},
	combo: {
		fighter2code: "arms",
		trials: [
			{
				title: "#1: Safe Combo",
				combo: [
					"seqid_Meat_Gutpunch",
					"seqid_Meat_HeavyPunch",
					"seqid_Meat_Palm"
				],
				commands: [
					[
						"attack1"
					],
					[
						"cancel",
						"attack2"
					],
					[
						"cancel",
						"attack1"
					]
				],
				options: {
					rePosition: "center"
				}
			},
			{
				title: "#2: Launch Combo",
				steps: [
					{
						action: "seqid_Meat_Jump",
						inputs: [
							"right",
							"attack3"
						]
					},
					{
						action: "seqid_Meat_Gutpunch",
						inputs: [
							"attack1"
						]
					},
					{
						action: "seqid_Meat_HeavyPunch",
						inputs: [
							"cancel",
							"attack2"
						]
					},
					{
						action: "seqid_Meat_Uppercut",
						inputs: [
							"cancel",
							"attack2"
						]
					},
					{
						action: "seqid_Meat_Jump",
						inputs: [
							"right",
							"attack3"
						]
					},
					{
						action: "seqid_Meat_Spike",
						inputs: [
							"cancel"
						]
					}
				],
				options: {
					rePosition: "center"
				}
			},
			{
				title: "#3: Lemon Starter",
				combo: [
					"proj_Beef_Lemon",
					"seqid_Meat_HeavyPunch",
					"seqid_Meat_Uppercut",
					"seqid_Meat_HeavyPunch",
					"seqid_Meat_HeavyPunch",
					"seqid_Meat_Jump",
					"seqid_Meat_Spike"
				],
				commands: [
					[
						"attack3"
					],
					[
						"attack2"
					],
					[
						"cancel",
						"attack2"
					],
					[
						"attack2"
					],
					[
						"attack2"
					],
					[
						"right",
						"attack3"
					],
					[
						"cancel"
					]
				],
				options: {
					rePosition: "right"
				}
			},
			{
				title: "#4: Parry Starter",
				combo: [
					"seqid_Beef_FlexHit",
					"seqid_Meat_HeavyPunch",
					"seqid_Meat_Jump",
					"seqid_Meat_Spike"
				],
				commands: [
					[
						"left",
						"attack3"
					],
					[
						"attack2"
					],
					[
						"right",
						"attack3"
					],
					[
						"cancel"
					]
				],
				options: {
					dummyInput: "6c",
					rePosition: "center"
				}
			},
			{
				title: "#5: Lemon Rapid",
				steps: [
					{
						action: "seqid_Beef_LemonThrow",
						inputs: [
							"attack3"
						],
						verify: "use"
					},
					{
						action: "seqid_Shared_Rapid",
						inputs: [
							"cancel",
							"right",
							"attack4"
						],
						verify: "use"
					},
					{
						action: "proj_Beef_Lemon",
						inputs: [
						]
					},
					{
						action: "seqid_Meat_Jump",
						inputs: [
							"right",
							"attack3"
						]
					},
					{
						action: "seqid_Meat_Gutpunch",
						inputs: [
							"attack1"
						]
					},
					{
						action: "seqid_Meat_HeavyPunch",
						inputs: [
							"cancel",
							"attack2"
						]
					},
					{
						action: "seqid_Meat_Uppercut",
						inputs: [
							"cancel",
							"attack2"
						]
					},
					{
						action: "seqid_Meat_HeavyPunch",
						inputs: [
							"attack2"
						]
					},
					{
						action: "seqid_Meat_HeavyPunch",
						inputs: [
							"attack2"
						]
					},
					{
						action: "seqid_Meat_Jump",
						inputs: [
							"right",
							"attack3"
						]
					},
					{
						action: "seqid_Meat_Spike",
						inputs: [
							"cancel"
						]
					}
				],
				options: {
					enableMeter: true,
					rePosition: "center"
				}
			},
			{
				title: "#6: Lemon Loops",
				combo: [
					"proj_Beef_Lemon",
					"seqid_Meat_Gutpunch",
					"seqid_Meat_HeavyPunch",
					"seqid_Meat_Uppercut",
					"seqid_Shared_Rapid",
					"proj_Beef_Lemon",
					"seqid_Meat_Gutpunch",
					"seqid_Meat_HeavyPunch",
					"seqid_Meat_Uppercut",
					"seqid_Shared_Rapid",
					"proj_Beef_Lemon",
					"seqid_Meat_Gutpunch",
					"seqid_Meat_HeavyPunch",
					"seqid_Meat_Uppercut",
					"seqid_Meat_Jump",
					"seqid_Meat_Spike"
				],
				commands: [
					[
						"attack3"
					],
					[
						"attack1"
					],
					[
						"cancel",
						"attack2"
					],
					[
						"cancel",
						"attack2"
					],
					[
						"cancel",
						"right",
						"attack4"
					],
					[
						"attack3"
					],
					[
						"attack1"
					],
					[
						"cancel",
						"attack2"
					],
					[
						"cancel",
						"attack2"
					],
					[
						"cancel",
						"right",
						"attack4"
					],
					[
						"attack3"
					],
					[
						"attack1"
					],
					[
						"cancel",
						"attack2"
					],
					[
						"cancel",
						"attack2"
					],
					[
						"right",
						"attack3"
					],
					[
						"cancel"
					]
				],
				options: {
					enableMeter: true,
					rePosition: "left"
				}
			}
		]
	},
	actions: {
		poseWin: [
			"0001",
			"0002"
		],
		poseLose: [
			"0001",
			"0002",
			"0003"
		],
		rejection: {
			meterCost: 1000,
			frames: [
				{
					effects: [
						"rejectionIn"
					],
					sprite: "0001",
					duration: 5,
					hurtboxes: [
					]
				},
				{
					effects: [
						"rejectionActive"
					],
					particle: {
						seqid: "seqid_Particle_RejectionFx",
						frames: [
							{
								behind: "fx_reject_0001",
								duration: 5,
								drawBox: {
									center: {
										x: 0,
										y: -0.32
									},
									size: {
										x: 1,
										y: 2.08
									}
								}
							},
							{
								behind: "fx_reject_0002",
								duration: 5,
								drawBox: {
									center: {
										x: 0,
										y: -0.32
									},
									size: {
										x: 1,
										y: 2.08
									}
								}
							},
							{
								behind: "fx_reject_0003",
								duration: 5,
								drawBox: {
									center: {
										x: 0,
										y: -0.32
									},
									size: {
										x: 1,
										y: 2.08
									}
								}
							},
							{
								behind: "fx_reject_0004",
								duration: 5,
								drawBox: {
									center: {
										x: 0,
										y: -0.32
									},
									size: {
										x: 1,
										y: 2.08
									}
								}
							},
							{
								behind: "fx_reject_0005",
								duration: 5,
								drawBox: {
									center: {
										x: 0,
										y: -0.32
									},
									size: {
										x: 1,
										y: 2.08
									}
								}
							},
							{
								behind: "fx_reject_0006",
								duration: 5,
								drawBox: {
									center: {
										x: 0,
										y: -0.32
									},
									size: {
										x: 1,
										y: 2.08
									}
								}
							},
							{
								behind: "fx_reject_0007",
								duration: 5,
								drawBox: {
									center: {
										x: 0,
										y: -0.32
									},
									size: {
										x: 1,
										y: 2.08
									}
								}
							},
							{
								behind: "fx_reject_0008",
								duration: 5,
								drawBox: {
									center: {
										x: 0,
										y: -0.32
									},
									size: {
										x: 1,
										y: 2.08
									}
								}
							},
							{
								behind: "fx_reject_0009",
								duration: 5,
								drawBox: {
									center: {
										x: 0,
										y: -0.32
									},
									size: {
										x: 1,
										y: 2.08
									}
								}
							},
							{
								behind: "fx_reject_0011",
								duration: 5,
								drawBox: {
									center: {
										x: 0,
										y: -0.32
									},
									size: {
										x: 1,
										y: 2.08
									}
								}
							},
							{
								behind: "fx_reject_0011",
								duration: 5,
								drawBox: {
									center: {
										x: 0,
										y: -0.32
									},
									size: {
										x: 1,
										y: 2.08
									}
								}
							}
						]
					},
					sprite: "0002",
					duration: 1,
					hurtboxes: [
					]
				},
				{
					effects: [
						"rejectionActive"
					],
					sprite: "0002",
					duration: 4,
					hurtboxes: [
					]
				},
				{
					effects: [
						"rejectionActive"
					],
					sprite: "0003",
					sound: "sfx_Meter_Reject",
					duration: 5,
					hurtboxes: [
					],
					attack: {
						setStunPhase: "reject",
						hitstop: 10,
						damage: 0,
						pushback: 1,
						onBlock: -2,
						meterGainAttackOnBlock: 0,
						meterGainAttackOnHit: 0,
						meterGainDefendOnBlock: 0,
						meterGainDefendOnHit: 0,
						tumble: {
							dx: 1,
							dy: -0.38,
							juggles: 1,
							canRelaunch: true
						},
						hitboxes: [
							{
								center: {
									x: 1.4,
									y: 0
								},
								size: {
									x: 1.8,
									y: 1
								}
							}
						]
					}
				},
				{
					effects: [
						"rejectionActive"
					],
					sprite: "0004",
					duration: 5
				},
				{
					effects: [
						"rejectionActive"
					],
					sprite: "0005",
					duration: 5
				},
				{
					effects: [
						"rejectionIn"
					],
					sprite: "0006",
					duration: 5
				}
			]
		},
		rapid: {
			meterCost: 1000,
			frames: [
				{
					sprite: "0001",
					duration: 5,
					freezeOther: true,
					hurtboxes: [
					],
					pushboxes: [
					]
				},
				{
					sprite: "0002",
					duration: 5,
					freezeOther: true,
					sound: "sfx_Meter_Rapid",
					particle: {
						seqid: "seqid_Particle_RapidFx",
						drawBox: {
							center: {
								x: 0,
								y: -0.32
							},
							size: {
								x: 1,
								y: 2.08
							}
						},
						frames: [
							{
								behind: "fx_rapid_0001",
								duration: 5
							},
							{
								behind: "fx_rapid_0002",
								duration: 5
							},
							{
								behind: "fx_rapid_0003",
								duration: 5
							},
							{
								behind: "fx_rapid_0004",
								duration: 5
							},
							{
								behind: "fx_rapid_0005",
								duration: 5
							},
							{
								behind: "fx_rapid_0006",
								duration: 5
							}
						]
					},
					effects: [
						"rapidPurp"
					],
					hurtboxes: [
					],
					pushboxes: [
					]
				},
				{
					sprite: "0003",
					duration: 5,
					freezeOther: true,
					effects: [
						"rapidBlack"
					],
					hurtboxes: [
					],
					pushboxes: [
					]
				},
				{
					sprite: "0004",
					duration: 5,
					freezeOther: true,
					effects: [
						"rapidBlack"
					],
					hurtboxes: [
					],
					pushboxes: [
					]
				},
				{
					sprite: "0003",
					duration: 5,
					freezeOther: true,
					effects: [
						"rapidBlack"
					],
					hurtboxes: [
					],
					pushboxes: [
					]
				},
				{
					sprite: "0004",
					duration: 5,
					freezeOther: true,
					effects: [
						"rapidBlack"
					],
					hurtboxes: [
					],
					pushboxes: [
					]
				},
				{
					sprite: "0005",
					duration: 5,
					freezeOther: true,
					effects: [
						"rapidBlack"
					],
					hurtboxes: [
					],
					pushboxes: [
					]
				}
			]
		},
		burst: {
			meterCost: 2000,
			next: "seqid_Shared_Falling",
			isAirborne: true,
			drawBox: {
				center: {
					x: 0,
					y: 0
				},
				size: {
					x: 1,
					y: 1.6
				}
			},
			hurtboxes: [
				{
					center: {
						x: 0,
						y: 0
					},
					size: {
						x: 1,
						y: 0.8
					}
				}
			],
			frames: [
				{
					sprite: "0001",
					duration: 5,
					hurtboxes: [
					],
					cannotBePushed: true,
					hover: -0.15
				},
				{
					sprite: "0002",
					duration: 5,
					hurtboxes: [
					],
					cannotBePushed: true,
					hover: -0.1
				},
				{
					sprite: "0003",
					sound: "sfx_Meter_Burst",
					duration: 5,
					hurtboxes: [
					],
					cannotBePushed: true,
					hover: -0.08,
					effects: [
						"burstIn"
					]
				},
				{
					sprite: "0004",
					duration: 5,
					hurtboxes: [
					],
					cannotBePushed: true,
					hover: -0.06,
					particle: {
						seqid: "seqid_Particle_BurstFx",
						drawBox: {
							center: {
								x: 0,
								y: -0.16
							},
							size: {
								x: 1,
								y: 2.2399999999999998
							}
						},
						frames: [
							{
								behind: "fx_burst_0001",
								duration: 5
							},
							{
								behind: "fx_burst_0002",
								duration: 5
							},
							{
								behind: "fx_burst_0003",
								duration: 5
							},
							{
								behind: "fx_burst_0004",
								duration: 5
							},
							{
								behind: "fx_burst_0005",
								duration: 5
							},
							{
								behind: "fx_burst_0006",
								duration: 5
							},
							{
								behind: "fx_burst_0007",
								duration: 5
							}
						]
					},
					effects: [
						"burstPink"
					]
				},
				{
					sprite: "0005",
					duration: 2,
					hurtboxes: [
					],
					cannotBePushed: true,
					attack: {
						ignoreArmor: true,
						damage: 0,
						onBlock: 0,
						meterGainAttackOnBlock: 0,
						meterGainAttackOnHit: 0,
						meterGainDefendOnBlock: 0,
						meterGainDefendOnHit: 0,
						tumble: {
							dx: 5,
							dy: -1,
							juggles: 0,
							canRelaunch: true
						},
						hitboxes: [
							{
								center: {
									x: 0,
									y: 0
								},
								size: {
									x: 5,
									y: 2
								}
							}
						]
					},
					effects: [
						"burstPink"
					]
				},
				{
					sprite: "0005",
					duration: 3,
					effects: [
						"burstPink"
					]
				},
				{
					sprite: "0006",
					duration: 5,
					effects: [
						"burstPink"
					]
				},
				{
					sprite: "0007",
					duration: 5,
					effects: [
						"burstPink"
					]
				},
				{
					sprite: "0007",
					duration: 5,
					effects: [
						"burstPink"
					]
				},
				{
					sprite: "0007",
					duration: 5,
					effects: [
						"burstOut"
					]
				},
				{
					sprite: "0008",
					duration: 5,
					hover: 0.05
				}
			]
		},
		downed: {
			frames: [
				{
					duration: 5,
					hover: 0,
					sprite: "0001"
				},
				{
					duration: 5,
					hover: 0,
					sprite: "0002"
				},
				{
					duration: 5,
					hover: 0,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0006"
				},
				{
					duration: 5,
					sprite: "0007"
				},
				{
					duration: 5,
					sprite: "0008"
				}
			]
		},
		standing: {
			frames: [
				{
					duration: 8,
					sprite: "0001"
				},
				{
					duration: 8,
					sprite: "0002"
				},
				{
					duration: 8,
					sprite: "0003"
				},
				{
					duration: 8,
					sprite: "0004"
				}
			]
		},
		walkBackward: {
			throwHurtboxes: [
				{
					center: {
						x: 0.1,
						y: 0
					},
					size: {
						x: 1.2,
						y: 1
					}
				}
			],
			frames: [
				{
					duration: 5,
					sprite: "0001"
				},
				{
					duration: 5,
					sprite: "0002"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0006"
				},
				{
					duration: 5,
					sprite: "0007"
				},
				{
					duration: 5,
					sprite: "0008"
				}
			]
		},
		walkForward: {
			frames: [
				{
					duration: 5,
					sprite: "0001"
				},
				{
					duration: 5,
					sprite: "0002"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0006"
				},
				{
					duration: 5,
					sprite: "0007"
				},
				{
					duration: 5,
					sprite: "0008"
				}
			]
		},
		blockstun: {
			palindromeAnimation: true,
			frames: [
				{
					duration: 5,
					sprite: "0001"
				},
				{
					duration: 5,
					sprite: "0002"
				},
				{
					duration: 1,
					sprite: "0003"
				}
			]
		},
		hitstun: {
			palindromeAnimation: true,
			frames: [
				{
					duration: 5,
					sprite: "0001"
				},
				{
					duration: 5,
					sprite: "0002"
				},
				{
					duration: 1,
					sprite: "0003"
				}
			]
		},
		throwstun: {
			frames: [
				{
					duration: 5,
					sprite: "0001"
				},
				{
					duration: 1,
					sprite: "0002"
				}
			]
		},
		tumbling: {
			drawBox: {
				center: {
					x: 0,
					y: 0
				},
				size: {
					x: 1,
					y: 1.6
				}
			},
			hurtboxes: [
				{
					center: {
						x: 0,
						y: 0
					},
					size: {
						x: 1,
						y: 0.8
					}
				}
			],
			frames: [
				{
					duration: 5,
					sprite: "0001"
				},
				{
					duration: 5,
					sprite: "0002"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				},
				{
					duration: 5,
					sprite: "0003"
				},
				{
					duration: 5,
					sprite: "0004"
				},
				{
					duration: 5,
					sprite: "0005"
				}
			]
		},
		exhausted: {
			drawBox: {
				center: {
					x: 0,
					y: 0
				},
				size: {
					x: 1,
					y: 1.6
				}
			},
			frames: [
				{
					duration: 5,
					sprite: "0001"
				},
				{
					duration: 5,
					sprite: "0002"
				},
				{
					duration: 5,
					sprite: "0001"
				},
				{
					duration: 1,
					sprite: "0002"
				}
			]
		},
		throwStart: {
			frames: [
				{
					sound: "sfx_Meat_ThrowStart",
					sprite: "0001",
					duration: 5
				},
				{
					sprite: "0002",
					duration: 10,
					cancel: {
						duration: 11,
						onHit: {
							auto: "seqid_Shared_ThrowHit"
						}
					},
					attack: {
						setStunPhase: "throw",
						ignoreParry: true,
						isThrowStart: true,
						impactType: "none",
						sameSide: false,
						damage: 0,
						meterGainAttackOnHit: 0,
						blockstun: 0,
						hitstun: 30,
						hitboxes: [
							{
								center: {
									x: 0.75,
									y: 0
								},
								size: {
									x: 0.5,
									y: 1
								}
							}
						],
						capture: true,
						snapTo: {
							x: 0.8,
							y: 0
						}
					}
				},
				{
					sprite: "0003",
					duration: 5
				},
				{
					sprite: "0004",
					duration: 5
				}
			]
		},
		throwHit: {
			frames: [
				{
					sprite: "0002",
					duration: 20,
					slide: 0.01,
					pushboxes: [
					]
				},
				{
					sound: "sfx_Meat_ThrowHit",
					sprite: "0001",
					duration: 5,
					pushboxes: [
					],
					attack: {
						stunPhase: "throw",
						setStunPhase: "throw",
						impactType: "none",
						sameSide: true,
						damage: 0,
						meterGainAttackOnHit: 0,
						onBlock: 0,
						tumble: {
							dx: 0,
							dy: 0,
							juggles: 1,
							canRelaunch: true
						},
						capture: true,
						snapTo: {
							x: 0.1,
							y: -0.5
						},
						hitboxes: [
							{
								center: {
									x: 0,
									y: 0
								},
								size: {
									x: 4,
									y: 2
								}
							}
						]
					}
				},
				{
					sprite: "0002",
					duration: 5,
					pushboxes: [
					],
					attack: {
						stunPhase: "throw",
						impactType: "none",
						sameSide: true,
						damage: 0.2,
						meterGainAttackOnHit: 500,
						onBlock: 0,
						tumble: {
							dx: 2,
							dy: 0.2,
							juggles: 0,
							canRelaunch: true,
							skipStartupAnimation: true
						},
						hitboxes: [
							{
								center: {
									x: 0,
									y: 0
								},
								size: {
									x: 4,
									y: 2
								}
							}
						]
					}
				},
				{
					sprite: "0003",
					duration: 5
				},
				{
					sprite: "0004",
					duration: 5
				},
				{
					sprite: "0004",
					duration: 5
				},
				{
					sprite: "0004",
					duration: 5
				},
				{
					sprite: "0005",
					duration: 5
				},
				{
					sprite: "0006",
					duration: 5
				}
			]
		},
		falling: {
			drawBox: {
				center: {
					x: 0,
					y: 0
				},
				size: {
					x: 1,
					y: 1.6
				}
			},
			hurtboxes: [
				{
					center: {
						x: 0,
						y: 0
					},
					size: {
						x: 1,
						y: 1
					}
				}
			],
			frames: [
				{
					duration: 5,
					sprite: "0001"
				},
				{
					duration: 5,
					sprite: "0002"
				},
				{
					duration: 5,
					sprite: "0003"
				}
			]
		},
		landing: {
			frames: [
				{
					sprite: "0001",
					isAirborne: false,
					particle: {
						seqid: "seqid_Particle_LandSmoke",
						frames: [
							{
								sprite: "fx_landsmoke_0001",
								behind: "fx_landsmoke_behind_0001",
								duration: 6
							},
							{
								sprite: "fx_landsmoke_0002",
								behind: "fx_landsmoke_behind_0002",
								duration: 6
							},
							{
								sprite: "fx_landsmoke_0003",
								behind: "fx_landsmoke_behind_0003",
								duration: 6
							}
						]
					},
					duration: 5,
					drawBox: {
						center: {
							x: 0,
							y: -0.21
						},
						size: {
							x: 1,
							y: 1.6
						}
					},
					hurtboxes: [
						{
							center: {
								x: 0,
								y: 0
							},
							size: {
								x: 1.4,
								y: 1
							}
						}
					],
					pushboxes: [
						{
							center: {
								x: 0,
								y: 0
							},
							size: {
								x: 1,
								y: 3
							}
						}
					]
				}
			]
		}
	},
	attacks: {
		seqid_Meat_Gutpunch: {
			displayName: "Gutpunch",
			displayIndex: 0,
			displayInput: "a",
			frames: [
				{
					sprite: "0001",
					duration: 2
				},
				{
					sound: "sfx_Meat_Gutpunch",
					sprite: "0001",
					duration: 3
				},
				{
					sprite: "0002",
					duration: 5,
					cancel: {
						duration: 14,
						onHit: {
							"4b": "seqid_Meat_HeavyPunch",
							"5b": "seqid_Meat_HeavyPunch",
							"6b": "seqid_Meat_HeavyPunch",
							"4c": "seqid_Beef_LemonThrow",
							"5c": "seqid_Beef_LemonThrow",
							"6c": "seqid_Beef_LemonThrow"
						},
						onBlock: {
							"4b": "seqid_Meat_HeavyPunch",
							"5b": "seqid_Meat_HeavyPunch",
							"6b": "seqid_Meat_HeavyPunch",
							"4c": "seqid_Beef_LemonThrow",
							"5c": "seqid_Beef_LemonThrow",
							"6c": "seqid_Beef_LemonThrow"
						}
					},
					attack: {
						damage: 0.05,
						addScalingFirstHit: 2,
						onBlock: 1,
						onHit: 5,
						hitboxes: [
							{
								center: {
									x: 0.85,
									y: 0.05
								},
								size: {
									x: 0.7,
									y: 0.3
								}
							}
						]
					}
				},
				{
					sprite: "0003",
					duration: 5,
					copyPrevAttack: true
				},
				{
					sprite: "0004",
					duration: 5
				},
				{
					sprite: "0005",
					duration: 5
				}
			]
		},
		seqid_Meat_HeavyPunch: {
			displayName: "Heavy Punch",
			displayIndex: 1,
			displayInput: "b",
			frames: [
				{
					sprite: "0001",
					duration: 2
				},
				{
					sound: "sfx_Meat_Punch",
					sprite: "0001",
					duration: 2
				},
				{
					sprite: "0002",
					duration: 5
				},
				{
					sprite: "0003",
					duration: 5,
					cancel: {
						duration: 10,
						canRapid: true,
						onHit: {
							"4a": "seqid_Meat_Palm",
							"5a": "seqid_Meat_Palm",
							"6a": "seqid_Meat_Palm",
							"4b": "seqid_Meat_Uppercut",
							"5b": "seqid_Meat_Uppercut",
							"6b": "seqid_Meat_Uppercut",
							"4c": "seqid_Beef_LemonThrow",
							"5c": "seqid_Beef_LemonThrow",
							"6c": "seqid_Beef_LemonThrow"
						},
						onBlock: {
							"4a": "seqid_Meat_Palm",
							"5a": "seqid_Meat_Palm",
							"6a": "seqid_Meat_Palm",
							"4b": "seqid_Meat_Uppercut",
							"5b": "seqid_Meat_Uppercut",
							"6b": "seqid_Meat_Uppercut",
							"4c": "seqid_Beef_LemonThrow",
							"5c": "seqid_Beef_LemonThrow",
							"6c": "seqid_Beef_LemonThrow"
						},
						aiOnHit: "seqid_Meat_Uppercut",
						aiOnBlock: "seqid_Meat_Palm"
					},
					attack: {
						impactType: "large",
						damage: 0.08,
						onBlock: -5,
						onHit: 5,
						hitboxes: [
							{
								center: {
									x: 1.35,
									y: -0.3
								},
								size: {
									x: 1.7,
									y: 0.3
								}
							}
						]
					}
				},
				{
					sprite: "0004",
					duration: 5,
					strikeHurtboxes: [
						{
							center: {
								x: 0.3,
								y: 0
							},
							size: {
								x: 1.6,
								y: 1
							}
						}
					]
				},
				{
					sprite: "0005",
					duration: 5,
					strikeHurtboxes: [
						{
							center: {
								x: 0.3,
								y: 0
							},
							size: {
								x: 1.6,
								y: 1
							}
						}
					]
				},
				{
					sprite: "0006",
					duration: 5,
					strikeHurtboxes: [
						{
							center: {
								x: 0.3,
								y: 0
							},
							size: {
								x: 1.6,
								y: 1
							}
						}
					]
				}
			]
		},
		seqid_Meat_Uppercut: {
			displayName: "Uppercut",
			displayIndex: 2,
			displayInput: "b > b",
			frames: [
				{
					sprite: "0001",
					duration: 5
				},
				{
					sound: "sfx_Meat_Uppercut1",
					sprite: "0002",
					duration: 5
				},
				{
					sprite: "0003",
					duration: 5,
					slide: 1.6,
					cancel: {
						duration: 10,
						canRapid: true,
						aiRapidOnHit: true
					},
					attack: {
						damage: 0.04,
						meterGainAttackOnBlock: 40,
						meterGainAttackOnHit: 50,
						meterGainDefendOnBlock: 25,
						blockstun: 35,
						hitstun: 35,
						hitboxes: [
							{
								center: {
									x: 0.4,
									y: -0.25
								},
								size: {
									x: 0.8,
									y: 0.5
								}
							}
						],
						tumbleOnAirborne: {
							dx: 0.2,
							dy: -0.4,
							juggles: 1,
							canRelaunch: true
						}
					}
				},
				{
					sprite: "0004",
					duration: 5,
					slide: 1.6,
					copyPrevAttack: true
				},
				{
					sound: "sfx_Meat_Uppercut2",
					sprite: "0005",
					duration: 5
				},
				{
					sprite: "0006",
					duration: 5
				},
				{
					sprite: "0007",
					duration: 5,
					slide: 0.1,
					cancel: {
						duration: 10,
						canRapid: true,
						aiRapidOnBlock: true
					},
					attack: {
						impactType: "large",
						damage: 0.08,
						meterGainAttackOnBlock: 40,
						meterGainAttackOnHit: 50,
						meterGainDefendOnBlock: 25,
						onBlock: -20,
						tumble: {
							dx: 0.5,
							dy: -1.7,
							juggles: 3
						},
						tumbleOnTumbling: {
							dx: 0.1,
							dy: -1.4,
							juggles: 0,
							canRelaunch: true
						},
						hitboxes: [
							{
								center: {
									x: 0.6,
									y: -0.5
								},
								size: {
									x: 1.2,
									y: 1
								}
							}
						]
					}
				},
				{
					sprite: "0008",
					duration: 5,
					slide: 0.1,
					copyPrevAttack: true
				},
				{
					sprite: "0008",
					duration: 5,
					slide: 0.05
				},
				{
					sprite: "0008",
					duration: 5
				},
				{
					sprite: "0008",
					duration: 6
				},
				{
					sprite: "0008",
					duration: 6
				},
				{
					sprite: "0008",
					duration: 6
				},
				{
					sprite: "0008",
					duration: 6,
					aiNextOnHit: "seqid_Meat_Jump"
				}
			]
		},
		seqid_Meat_Palm: {
			displayName: "Palm",
			displayIndex: 4,
			displayInput: "b > a",
			frames: [
				{
					sound: "sfx_Meat_Punch",
					sprite: "0005",
					duration: 3
				},
				{
					sprite: "0006",
					duration: 5
				},
				{
					sprite: "0001",
					duration: 5
				},
				{
					sprite: "0002",
					duration: 5,
					cancel: {
						duration: 10,
						canRapid: true,
						onHit: {
						},
						onBlock: {
						}
					},
					attack: {
						damage: 0.07,
						chip: 0.02,
						pushback: 0.4,
						onBlock: -8,
						tumble: {
							dx: 0.2,
							dy: -0.6,
							juggles: 1
						},
						tumbleOnAirborne: {
							dx: 0.8,
							dy: 0,
							juggles: 0,
							canRelaunch: true
						},
						hitboxes: [
							{
								center: {
									x: 1.5,
									y: -0.25
								},
								size: {
									x: 2,
									y: 0.4
								}
							}
						]
					}
				},
				{
					sprite: "0003",
					duration: 5
				},
				{
					sprite: "0004",
					duration: 5
				},
				{
					sprite: "0005",
					duration: 5
				},
				{
					sprite: "0006",
					duration: 5
				}
			]
		},
		seqid_Meat_Jump: {
			displayName: "Jump Attack",
			displayIndex: 10,
			displayInput: "6c",
			drawBox: {
				center: {
					x: 0,
					y: 0
				},
				size: {
					x: 1,
					y: 1.6
				}
			},
			hurtboxes: [
				{
					center: {
						x: 0,
						y: 0
					},
					size: {
						x: 1,
						y: 0.8
					}
				}
			],
			cannotCounterHit: true,
			frames: [
				{
					sprite: "0001",
					throwHurtboxes: [
					],
					duration: 4,
					drawBox: {
						center: {
							x: 0,
							y: -0.21
						},
						size: {
							x: 1,
							y: 1.6
						}
					},
					hurtboxes: [
						{
							center: {
								x: 0,
								y: 0
							},
							size: {
								x: 1,
								y: 1
							}
						}
					],
					cannotCounterHit: false
				},
				{
					sprite: "0001",
					throwHurtboxes: [
					],
					sound: "sfx_Meat_Jump",
					particle: {
						seqid: "seqid_Particle_JumpSmoke",
						frames: [
							{
								sprite: "fx_jumpsmoke_0001",
								duration: 6
							},
							{
								sprite: "fx_jumpsmoke_0002",
								duration: 6
							},
							{
								sprite: "fx_jumpsmoke_0003",
								duration: 6
							}
						]
					},
					duration: 1,
					drawBox: {
						center: {
							x: 0,
							y: -0.21
						},
						size: {
							x: 1,
							y: 1.6
						}
					},
					hurtboxes: [
						{
							center: {
								x: 0,
								y: 0
							},
							size: {
								x: 1,
								y: 1
							}
						}
					],
					cannotCounterHit: false
				},
				{
					sprite: "0002",
					isAirborne: true,
					duration: 6,
					slide: 1.2,
					hover: -0.5,
					armorVsAirborne: true,
					armorVsProjectile: true
				},
				{
					sprite: "0003",
					isAirborne: true,
					duration: 6,
					slide: 1.2,
					hover: -0.5,
					armorVsAirborne: true,
					armorVsProjectile: true,
					aiIgnoreAttack: true,
					cancel: {
						duration: 7,
						onHitAirborne: {
							auto: "seqid_Meat_Spike"
						}
					},
					attack: {
						hitstop: 10,
						damage: 0.025,
						cannotKO: true,
						meterGainAttackOnHit: 0,
						onBlock: 0,
						hitsAirborneOnly: true,
						tumble: {
							canRelaunch: true,
							dx: 0,
							dy: 0,
							juggles: 1
						},
						hitboxes: [
							{
								center: {
									x: 0.75,
									y: 0.1
								},
								size: {
									x: 0.5,
									y: 0.4
								}
							}
						],
						capture: true,
						snapTo: {
							x: 0.8,
							y: 0.1
						}
					}
				},
				{
					sprite: "0003",
					isAirborne: true,
					duration: 1,
					slide: 0.016666666666666666,
					hover: -0.016666666666666666
				},
				{
					sprite: "0004",
					isAirborne: true,
					duration: 1,
					slide: 0.016666666666666666,
					hover: -0.016666666666666666,
					cancel: {
						duration: 1,
						onWhiff: {
							"4": "seqid_Beef_AirLemon",
							"4a": "seqid_Beef_AirLemon",
							"4b": "seqid_Beef_AirLemon",
							"4c": "seqid_Beef_AirLemon"
						}
					}
				},
				{
					sprite: "0004",
					isAirborne: true,
					duration: 4,
					slide: 0.06666666666666667,
					hover: -0.06666666666666667
				},
				{
					sprite: "0005",
					isAirborne: true,
					duration: 6,
					slide: 0.1,
					hover: 0.1,
					hurtboxes: [
						{
							center: {
								x: 0,
								y: 0
							},
							size: {
								x: 1,
								y: 0.6
							}
						}
					]
				},
				{
					sprite: "0006",
					isAirborne: true,
					duration: 6,
					slide: 0.1,
					hover: 0.4,
					hurtboxes: [
						{
							center: {
								x: 0,
								y: 0
							},
							size: {
								x: 1,
								y: 0.6
							}
						}
					]
				},
				{
					sprite: "0007",
					isAirborne: true,
					duration: 6,
					slide: 0.1,
					hover: 0.6,
					hurtboxes: [
						{
							center: {
								x: 0,
								y: 0
							},
							size: {
								x: 1,
								y: 0.6
							}
						}
					],
					attack: {
						impactType: "large",
						damage: 0.1,
						addScalingFirstHit: 1,
						onBlock: 10,
						onHit: 20,
						hitboxes: [
							{
								center: {
									x: 1,
									y: 0.15
								},
								size: {
									x: 1,
									y: 0.4
								}
							}
						]
					}
				},
				{
					sprite: "0001",
					isAirborne: false,
					particle: {
						seqid: "seqid_Particle_LandSmoke",
						frames: [
							{
								sprite: "fx_landsmoke_0001",
								behind: "fx_landsmoke_behind_0001",
								duration: 6
							},
							{
								sprite: "fx_landsmoke_0002",
								behind: "fx_landsmoke_behind_0002",
								duration: 6
							},
							{
								sprite: "fx_landsmoke_0003",
								behind: "fx_landsmoke_behind_0003",
								duration: 6
							}
						]
					},
					duration: 5,
					drawBox: {
						center: {
							x: 0,
							y: -0.21
						},
						size: {
							x: 1,
							y: 1.6
						}
					},
					hurtboxes: [
						{
							center: {
								x: 0,
								y: 0
							},
							size: {
								x: 1.4,
								y: 1
							}
						}
					],
					pushboxes: [
						{
							center: {
								x: 0,
								y: 0
							},
							size: {
								x: 1,
								y: 3
							}
						}
					]
				}
			]
		},
		seqid_Meat_Spike: {
			displayName: "Spike",
			displayIndex: 11,
			displayInput: "6c > on hit",
			drawBox: {
				center: {
					x: 0,
					y: 0
				},
				size: {
					x: 1,
					y: 1.6
				}
			},
			hurtboxes: [
			],
			isAirborne: true,
			next: "seqid_Shared_Falling",
			frames: [
				{
					sound: "sfx_Meat_SpikeSetup",
					sprite: "0001",
					duration: 5,
					hover: -0.03
				},
				{
					sound: "sfx_Meat_SpikeSetup",
					sprite: "0002",
					duration: 5,
					hover: -0.02
				},
				{
					sound: "sfx_Meat_SpikeHit",
					sprite: "0003",
					duration: 5,
					attack: {
						impactType: "large",
						damage: 0.125,
						onBlock: 0,
						tumble: {
							canRelaunch: true,
							dx: 1.2,
							dy: 0,
							juggles: 0
						},
						hitboxes: [
							{
								center: {
									x: 1,
									y: 0.15
								},
								size: {
									x: 1,
									y: 0.4
								}
							}
						]
					}
				},
				{
					sprite: "0004",
					duration: 5
				},
				{
					sprite: "0005",
					duration: 5
				}
			]
		},
		seqid_Beef_LemonFake: {
			displayName: "Indecisive Lemon",
			displayIndex: 21,
			displayInput: "5c > 4",
			displayCancelsFrom: "seqid_Beef_LemonThrow",
			frames: [
				{
					sprite: "0003",
					duration: 1,
					forceRecovery: true
				},
				{
					sprite: "0002",
					duration: 5,
					forceRecovery: true
				},
				{
					sprite: "0001",
					duration: 5,
					forceRecovery: true
				}
			]
		},
		seqid_Beef_LemonThrow: {
			displayName: "Lemon Roll",
			displayIndex: 20,
			displayInput: "5c",
			projectileLimit: 1,
			frames: [
				{
					sprite: "0001",
					duration: 5
				},
				{
					sprite: "0002",
					duration: 5
				},
				{
					sprite: "0003",
					duration: 4
				},
				{
					sprite: "0003",
					duration: 1,
					cancel: {
						duration: 1,
						onWhiff: {
							"4": "seqid_Beef_LemonFake"
						}
					}
				},
				{
					sprite: "0004",
					duration: 2
				},
				{
					sound: "sfx_Meat_Lemon",
					sprite: "0005",
					duration: 5
				},
				{
					sprite: "0006",
					duration: 5
				},
				{
					sprite: "0007",
					duration: 1,
					projectileId: "proj_Beef_Lemon"
				},
				{
					sprite: "0007",
					duration: 4,
					cancel: {
						duration: 10,
						canWhiffRapid: true
					}
				},
				{
					sprite: "0008",
					duration: 3
				},
				{
					sprite: "0008",
					duration: 2
				},
				{
					sprite: "0008",
					duration: 3
				},
				{
					sprite: "0008",
					duration: 2
				},
				{
					sprite: "0008",
					duration: 3
				},
				{
					sprite: "0008",
					duration: 2
				},
				{
					sprite: "0008",
					duration: 5
				},
				{
					sprite: "0008",
					duration: 5
				}
			]
		},
		seqid_Beef_FlexStart: {
			displayName: "Flex",
			displayIndex: 30,
			displayInput: "4c",
			frames: [
				{
					sound: "sfx_Meat_Flex",
					sprite: "0001",
					duration: 8,
					onParry: {
						next: "seqid_Beef_FlexHit",
						onProjectile: "seqid_Beef_FlexProjectile"
					}
				},
				{
					sprite: "0002",
					duration: 5
				},
				{
					sprite: "0003",
					duration: 5,
					meterGain: 50
				},
				{
					sprite: "0004",
					duration: 5,
					meterGain: 50
				},
				{
					sprite: "0005",
					duration: 5
				},
				{
					sprite: "0006",
					duration: 5
				},
				{
					sprite: "0007",
					duration: 5
				},
				{
					sprite: "0008",
					duration: 5
				}
			]
		},
		seqid_Beef_FlexHit: {
			displayName: "BEEFCAKE",
			displayIndex: 31,
			displayInput: "4c > on hit",
			frames: [
				{
					sprite: "0002",
					freezeOther: true,
					duration: 1,
					hurtboxes: [
					],
					effects: [
						"steakScreen"
					]
				},
				{
					sprite: "0002",
					meterGain: 500,
					freezeOther: true,
					duration: 1,
					hurtboxes: [
					],
					effects: [
						"steakScreen"
					]
				},
				{
					sprite: "0002",
					freezeOther: true,
					duration: 3,
					hurtboxes: [
					],
					effects: [
						"steakScreen"
					]
				},
				{
					sprite: "0003",
					freezeOther: true,
					duration: 5,
					hurtboxes: [
					],
					effects: [
						"steakScreen"
					]
				},
				{
					sprite: "0004",
					freezeOther: true,
					duration: 5,
					hurtboxes: [
					],
					effects: [
						"steakScreen"
					]
				},
				{
					sprite: "0005",
					freezeOther: true,
					duration: 5,
					hurtboxes: [
					],
					effects: [
						"steakScreen"
					]
				},
				{
					sprite: "0001",
					sound: "sfx_Meat_Laugh",
					duration: 5,
					hurtboxes: [
					],
					effects: [
						"steakScreen"
					]
				},
				{
					sprite: "0002",
					duration: 5,
					hurtboxes: [
					],
					effects: [
						"steakScreen"
					]
				},
				{
					sprite: "0003",
					duration: 1,
					hurtboxes: [
					],
					effects: [
						"steakScreen"
					],
					cancel: {
						duration: 10,
						canRapidHitAirborne: true,
						canRapidHitGrounded: true
					},
					attack: {
						impactType: "large",
						damage: 0.16,
						chip: 0.06,
						addScalingFirstHit: 4,
						onBlock: -5,
						tumble: {
							dx: 0.4,
							dy: -1.6,
							juggles: 9,
							canRelaunch: true
						},
						hitboxes: [
							{
								center: {
									x: 1.4,
									y: -0.1
								},
								size: {
									x: 1.8,
									y: 0.3
								}
							}
						],
						impactScale: 2
					}
				},
				{
					sprite: "0003",
					duration: 4,
					effects: [
						"steakScreen"
					],
					strikeHurtboxes: [
						{
							center: {
								x: 0.5,
								y: 0
							},
							size: {
								x: 3,
								y: 1
							}
						}
					]
				},
				{
					sprite: "0004",
					duration: 5,
					effects: [
						"steakScreen"
					],
					strikeHurtboxes: [
						{
							center: {
								x: 0.5,
								y: 0
							},
							size: {
								x: 3,
								y: 1
							}
						}
					]
				},
				{
					sprite: "0005",
					duration: 5,
					effects: [
						"steakScreen"
					],
					strikeHurtboxes: [
						{
							center: {
								x: 0.5,
								y: 0
							},
							size: {
								x: 3,
								y: 1
							}
						}
					]
				},
				{
					sprite: "0006",
					duration: 5,
					effects: [
						"steakScreen"
					],
					strikeHurtboxes: [
						{
							center: {
								x: 0.5,
								y: 0
							},
							size: {
								x: 3,
								y: 1
							}
						}
					]
				},
				{
					sprite: "0007",
					duration: 5,
					effects: [
						"steakScreen"
					],
					strikeHurtboxes: [
						{
							center: {
								x: 0.5,
								y: 0
							},
							size: {
								x: 3,
								y: 1
							}
						}
					]
				},
				{
					sprite: "0008",
					duration: 5,
					effects: [
						"steakScreen"
					],
					strikeHurtboxes: [
						{
							center: {
								x: 0.25,
								y: 0
							},
							size: {
								x: 2.5,
								y: 1
							}
						}
					]
				}
			]
		},
		seqid_Beef_FlexProjectile: {
			displayName: "BEEFCAKE (Projectile Parry)",
			displayIndex: 32,
			displayInput: "4c > on hit",
			frames: [
				{
					sprite: "0002",
					freezeOther: false,
					duration: 1,
					hurtboxes: [
					],
					effects: [
						"steakScreen"
					]
				},
				{
					sprite: "0002",
					meterGain: 500,
					freezeOther: false,
					duration: 1,
					hurtboxes: [
					],
					effects: [
						"steakScreen"
					]
				},
				{
					sprite: "0002",
					freezeOther: false,
					duration: 3,
					hurtboxes: [
					],
					effects: [
						"steakScreen"
					]
				},
				{
					sprite: "0003",
					freezeOther: false,
					duration: 5,
					hurtboxes: [
					],
					effects: [
						"steakScreen"
					]
				},
				{
					sprite: "0004",
					freezeOther: false,
					duration: 5,
					hurtboxes: [
					],
					effects: [
						"steakScreen"
					]
				},
				{
					sprite: "0005",
					freezeOther: false,
					duration: 5,
					hurtboxes: [
					],
					effects: [
						"steakScreen"
					]
				},
				{
					sprite: "0001",
					sound: "sfx_Meat_Laugh",
					duration: 5,
					hurtboxes: [
					],
					effects: [
						"steakScreen"
					]
				},
				{
					sprite: "0002",
					duration: 5,
					hurtboxes: [
					],
					effects: [
						"steakScreen"
					]
				},
				{
					sprite: "0003",
					duration: 1,
					hurtboxes: [
					],
					effects: [
						"steakScreen"
					],
					cancel: {
						duration: 10,
						canRapidHitAirborne: true,
						canRapidHitGrounded: true
					},
					attack: {
						impactType: "large",
						damage: 0.16,
						chip: 0.06,
						addScalingFirstHit: 4,
						onBlock: -5,
						tumble: {
							dx: 0.4,
							dy: -1.6,
							juggles: 9,
							canRelaunch: true
						},
						hitboxes: [
							{
								center: {
									x: 1.4,
									y: -0.1
								},
								size: {
									x: 1.8,
									y: 0.3
								}
							}
						],
						impactScale: 2
					}
				},
				{
					sprite: "0003",
					duration: 4,
					effects: [
						"steakScreen"
					],
					strikeHurtboxes: [
						{
							center: {
								x: 0.5,
								y: 0
							},
							size: {
								x: 3,
								y: 1
							}
						}
					]
				},
				{
					sprite: "0004",
					duration: 5,
					effects: [
						"steakScreen"
					],
					strikeHurtboxes: [
						{
							center: {
								x: 0.5,
								y: 0
							},
							size: {
								x: 3,
								y: 1
							}
						}
					]
				},
				{
					sprite: "0005",
					duration: 5,
					effects: [
						"steakScreen"
					],
					strikeHurtboxes: [
						{
							center: {
								x: 0.5,
								y: 0
							},
							size: {
								x: 3,
								y: 1
							}
						}
					]
				},
				{
					sprite: "0006",
					duration: 5,
					effects: [
						"steakScreen"
					],
					strikeHurtboxes: [
						{
							center: {
								x: 0.5,
								y: 0
							},
							size: {
								x: 3,
								y: 1
							}
						}
					]
				},
				{
					sprite: "0007",
					duration: 5,
					effects: [
						"steakScreen"
					],
					strikeHurtboxes: [
						{
							center: {
								x: 0.5,
								y: 0
							},
							size: {
								x: 3,
								y: 1
							}
						}
					]
				},
				{
					sprite: "0008",
					duration: 5,
					effects: [
						"steakScreen"
					],
					strikeHurtboxes: [
						{
							center: {
								x: 0.25,
								y: 0
							},
							size: {
								x: 2.5,
								y: 1
							}
						}
					]
				}
			]
		},
		seqid_Beef_AirLemon: {
			displayName: "Air Lemon",
			displayIndex: 12,
			displayInput: "6c > 4",
			displayCancelsFrom: "seqid_Meat_Jump",
			isAirborne: true,
			cannotCounterHit: true,
			drawBox: {
				center: {
					x: 0,
					y: 0
				},
				size: {
					x: 1,
					y: 1.6
				}
			},
			hurtboxes: [
				{
					center: {
						x: 0,
						y: 0
					},
					size: {
						x: 1,
						y: 1
					}
				}
			],
			frames: [
				{
					sprite: "0005",
					duration: 5,
					hover: -0.08333333333333333
				},
				{
					sprite: "0006",
					duration: 6,
					hover: 0
				},
				{
					sprite: "0006",
					duration: 6,
					hover: 0.1
				},
				{
					sprite: "0006",
					duration: 6,
					hover: 0.2
				},
				{
					sound: "sfx_Meat_Lemon",
					sprite: "0001",
					duration: 3,
					hover: 0.15
				},
				{
					sprite: "0002",
					duration: 3,
					hover: 0.15
				},
				{
					sprite: "0003",
					duration: 1,
					hover: 0.08333333333333333,
					projectileId: "proj_Beef_AirLemon"
				},
				{
					sprite: "0003",
					duration: 5,
					hover: 0.4166666666666667
				},
				{
					sprite: "0001",
					isAirborne: false,
					particle: {
						seqid: "seqid_Particle_LandSmoke",
						frames: [
							{
								sprite: "fx_landsmoke_0001",
								behind: "fx_landsmoke_behind_0001",
								duration: 6
							},
							{
								sprite: "fx_landsmoke_0002",
								behind: "fx_landsmoke_behind_0002",
								duration: 6
							},
							{
								sprite: "fx_landsmoke_0003",
								behind: "fx_landsmoke_behind_0003",
								duration: 6
							}
						]
					},
					duration: 5,
					drawBox: {
						center: {
							x: 0,
							y: -0.21
						},
						size: {
							x: 1,
							y: 1.6
						}
					},
					hurtboxes: [
						{
							center: {
								x: 0,
								y: 0
							},
							size: {
								x: 1.4,
								y: 1
							}
						}
					],
					pushboxes: [
						{
							center: {
								x: 0,
								y: 0
							},
							size: {
								x: 1,
								y: 3
							}
						}
					]
				}
			]
		}
	}
}